'use client'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import GalleryImagesSkeleton from '../../Skeleton/GalleryImages'
import { Icon } from '@iconify/react'
// Giả sử đường dẫn và các Types này đã được định nghĩa
import { GalleryImagesType } from '@/app/types/galleryimage' 
import { FullMenuType } from '@/app/types/fullmenu' 

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImagesType[]>([])
  const [fullMenu, setFullMenu] = useState<FullMenuType[]>([])
  const [loading, setLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // STATE MỚI: Để lưu trữ sản phẩm đang được xem chi tiết
  const [selectedProduct, setSelectedProduct] = useState<GalleryImagesType | null>(null)

  const openFullMenu = () => setIsMenuOpen(true) // Giữ nguyên chức năng nút "Xem thêm"
  const closeFullMenu = () => setIsMenuOpen(false)

  // HÀM MỚI: Mở modal chi tiết sản phẩm
  const openProductDetail = (product: GalleryImagesType) => {
    setSelectedProduct(product)
  }
  const closeProductDetail = () => {
    setSelectedProduct(null)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setGalleryImages(data.GalleryImagesData)
        setFullMenu(data.FullMenuData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // --- COMPONENT CHILD: Danh sách Menu (Dùng cho nút Xem thêm) ---
  const MenuList = ({ menuData }: { menuData: FullMenuType[] }) => {
    const midPoint = Math.ceil(menuData.length / 2)
    const firstHalf = menuData.slice(0, midPoint)
    const secondHalf = menuData.slice(midPoint)

    const MenuItem = ({ item }: { item: FullMenuType }) => (
      <div className='flex items-center text-left py-3 border-b border-gray-100 transition duration-300 hover:bg-neutral-50 p-2 rounded-lg'>
        {item.src && ( 
          <div className='relative w-20 h-20 md:w-24 md:h-24 mr-4 shrink-0 rounded-md overflow-hidden shadow-sm'>
            <Image
              src={item.src}
              alt={item.name}
              fill={true} 
              objectFit='cover'
              className='transition-transform duration-300 hover:scale-105'
            />
          </div>
        )}
        <div className='flex flex-col flex-grow'>
          <div className='flex justify-between items-baseline mb-1'>
            <p className='text-lg font-bold text-black leading-snug'>
              {item.name}
            </p>
            <p className='text-lg font-extrabold text-primary ml-4 shrink-0'>
              {item.price}
            </p>
          </div>
          <p className='text-sm text-gray-600 mt-0.5 italic'>
            {item.description}
          </p>
        </div>
      </div>
    )

    return (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 max-h-[calc(95vh-160px)] overflow-y-auto custom-scrollbar px-4'>
        <div className='flex flex-col'>
          {firstHalf.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
        <div className='flex flex-col'>
          {secondHalf.map((item, index) => (
            <MenuItem key={index + midPoint} item={item} />
          ))}
        </div>
      </div>
    )
  }

  // --- COMPONENT CHILD: Modal Chi Tiết Sản Phẩm (Dùng cho nút Xem chi tiết) ---
  const ProductDetailModal = ({ product, onClose }: { product: GalleryImagesType, onClose: () => void }) => {
    return (
      <div
        className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-[60] px-4'
        onClick={onClose}
      >
        <div
          className='relative mx-auto w-full max-w-6xl max-h-[95vh] rounded-3xl p-6 md:p-10 text-center bg-white overflow-hidden shadow-2xl flex flex-col'
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className='absolute top-0 right-0 mr-4 mt-4 hover:cursor-pointer p-2 rounded-full bg-neutral-100 hover:bg-primary/10 transition z-10'
          >
            <Icon
              icon='material-symbols:close-rounded'
              width={28}
              height={28}
              className='text-black hover:text-primary inline-block'
            />
          </button>
          <div className='overflow-y-auto custom-scrollbar flex-grow'>
            <div className='relative w-full h-64 md:h-80 mb-6 rounded-xl overflow-hidden'>
                <Image
                    src={product.src}
                    alt={product.name}
                    fill={true}
                    style={{ objectFit: 'cover' }}
                />
            </div>

            <h3 className='text-3xl font-extrabold text-black mb-2'>{product.name}</h3>
            <p className='text-2xl font-bold text-primary mb-4'>$ {product.price}</p>
            
            {/* 🔥 HIỂN THỊ DESCRIPTION */}
            <p className='text-gray-700 text-lg text-left whitespace-pre-line'>
                {product.description}
            </p>
            {/* END DESCRIPTION */}
          </div>
        </div>
      </div>
    )
  }
  // --- END COMPONENT CHILD ---

  return (
    <section id='menu' className='scroll-mt-20'>
      <div className='container'>
        <div className='text-center'>
          <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>
            Our Product
          </p>
          <h2>Xem Các Sản Phẩm Tiêu Biểu</h2>
        </div>
        <div className='my-16 px-6'>
          <Masonry
            breakpointCols={{ default: 2, '700': 2, '500': 1 }}
            className='flex gap-6'
            columnClassName='masonry-column'
          >
            {/* Map through images */}
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <GalleryImagesSkeleton key={i} />
                ))
              : galleryImages.map((item, index) => (
                  <div
                    key={index}
                    className='overflow-hidden rounded-3xl mb-6 relative group'
                  >
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={600}
                      height={500}
                      className='object-cover w-full h-full'
                    />
                    <div className='w-full h-full absolute bg-black/40 top-full group-hover:top-0 duration-500 lg:p-12 md:p-8 p-3.5 flex flex-col items-start lg:gap-8 gap-4 justify-end'>
                      <p className='text-white lg:text-2xl text-xl'>
                        {item.name}
                      </p>
                      <div className='flex items-center justify-between w-full'>
                        <p className='text-white lg:text-2xl text-xl'>
                          $ {item.price}
                        </p>
                        <Link
                          href='#'
                          // GỌI HÀM MỞ MODAL CHI TIẾT SẢN PHẨM
                          onClick={(e) => {
                            e.preventDefault() 
                            openProductDetail(item) 
                          }}
                          className='text-white rounded-full bg-primary border duration-300 border-primary py-2 lg:px-6 md:px-4 px-3 hover:bg-primary/40 hover:backdrop-blur-xs md:text-base text-sm'
                        >
                          Xem chi tiết
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
          </Masonry>
        </div>
        <div className='flex justify-center'>
          <button
            className='px-6 py-2 border border-primary rounded-full text-base font-medium text-white bg-primary hover:bg-primary/20 hover:text-primary hover:cursor-pointer transition ease-in-out duration-300'
            onClick={openFullMenu} // Mở toàn bộ danh sách sản phẩm
          >
            Xem thêm
          </button>
          
          {/* 1. Modal Full Menu (Cho nút "Xem thêm") */}
          {isMenuOpen && (
            <div
              className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50 px-4'
              onClick={closeFullMenu}
            >
              <div
                className='relative mx-auto w-full max-w-6xl max-h-[95vh] rounded-3xl px-4 pt-14 pb-8 text-center bg-white overflow-hidden shadow-2xl'
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeFullMenu}
                  className='absolute top-0 right-0 mr-6 mt-6 hover:cursor-pointer p-2 rounded-full bg-neutral-100 hover:bg-primary/10 transition'
                >
                  <Icon
                    icon='material-symbols:close-rounded'
                    width={28}
                    height={28}
                    className='text-black hover:text-primary inline-block'
                  />
                </button>
                <p className='text-black text-4xl font-serif font-extrabold mb-2'>
                  Products 📜
                </p>
                <div className='max-h-[calc(95vh-160px)] overflow-y-auto custom-scrollbar px-4'>
                  {fullMenu.length > 0 ? (
                    <MenuList menuData={fullMenu} />
                  ) : (
                    <p className='text-gray-500 py-10'>Loading menu items...</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* 2. Modal Chi Tiết Sản Phẩm (Cho nút "Xem chi tiết") */}
          {selectedProduct && (
            <ProductDetailModal product={selectedProduct} onClose={closeProductDetail} />
          )}

        </div>
      </div>
    </section>
  )
}

export default Gallery