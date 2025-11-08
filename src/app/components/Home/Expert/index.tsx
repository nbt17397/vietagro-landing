// 'use client'
// import Slider from 'react-slick'
// import React, { useEffect, useState } from 'react'
// import Image from 'next/image'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import { ExpertChiefType } from '@/app/types/expertchief'
// import ChiefDetailSkeleton from '../../Skeleton/ChiefDetail'

// const Expert = () => {
//   const [chiefDetail, setChiefDetail] = useState<ExpertChiefType[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch('/api/data')
//         if (!res.ok) throw new Error('Failed to fetch')
//         const data = await res.json()
//         setChiefDetail(data.ExpertChiefData)
//       } catch (error) {
//         console.error('Error fetching services:', error)
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchData()
//   }, [])

//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: true,
//     speed: 500,
//     cssEase: 'linear',
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 450,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   }

//   return (
//     <section className='bg-primary/10'>
//       <div className='container'>
//         <div className='text-center'>
//           <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>
//             Our Chefs
//           </p>
//           <h2>Meet Our Culinary Experts</h2>
//         </div>
//         <Slider {...settings}>
//           {loading
//             ? Array.from({ length: 3 }).map((_, i) => (
//                 <ChiefDetailSkeleton key={i} />
//               ))
//             : chiefDetail.map((items, i) => (
//                 <div key={i}>
//                   <div className='m-3 my-10 p-10 text-center backdrop-blur-md bg-white/50 rounded-3xl'>
//                     <div className='relative'>
//                       <Image
//                         src={items.imgSrc}
//                         alt='gaby'
//                         width={362}
//                         height={262}
//                         className='inline-block m-auto w-auto'
//                       />
//                       <div className='absolute top-[75%] -right-[10%]'>
//                         <Image
//                           src={'/images/Expert/Linkedin.svg'}
//                           alt='linkedin'
//                           width={220}
//                           height={120}
//                         />
//                       </div>
//                     </div>
//                     <div className='mt-16'>
//                       <h3 className='text-2xl font-semibold text-black'>
//                         {items.name}
//                       </h3>
//                       <h4 className='text-lg font-normal text-black/50 opacity-50'>
//                         {items.profession}
//                       </h4>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//         </Slider>
//       </div>
//     </section>
//   )
// }

// export default Expert
'use client'
import Slider from 'react-slick'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { NewsType } from '@/app/types/newtype'
import NewsSkeleton from '../../Skeleton/NewsType'

// Giữ nguyên tên component là Expert
const Expert = () => {
  // Cập nhật state sử dụng NewsType và đổi tên state thành newsData
  const [newsData, setNewsData] = useState<NewsType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        // Cập nhật để lấy dữ liệu từ trường NewsData
        setNewsData(data.NewsData)
      } catch (error) {
        console.error('Error fetching news:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section className='bg-primary/10 py-16 md:py-24'>
      <div className='container mx-auto px-4 max-w-7xl'>
        <div className='text-center mb-12'>
          <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>
            News
          </p>
          <h2>Cập Nhật Từ Blog Của Chúng Tôi</h2>
        </div>
        <Slider {...settings}>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
              // Sử dụng NewsSkeleton
              <NewsSkeleton key={i} />
            ))
            // Lặp qua newsData
            : newsData.map((items, i) => (
              <div key={i} className='p-2'>
                <div className='m-3 my-10 p-10 text-center backdrop-blur-md bg-white/50 rounded-3xl transition-all duration-300 hover:shadow-xl h-full flex flex-col'>
                  <div className='relative flex-shrink-0'>
                    <Image
                      // Sử dụng imgSrc cho ảnh bài báo
                      src={items.imgSrc}
                      alt={items.title ?? "Bài viết tin tức"}
                      width={362}
                      height={262}
                      className='inline-block m-auto w-full max-h-[262px] rounded-xl object-cover aspect-video'
                    />
                    {/* Vị trí ngày đăng (thay thế icon Linkedin) */}
                    <div className='absolute bottom-0 left-0 -translate-y-1/2 translate-x-1/4'>
                      <span className='inline-block bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-lg'>
                        {items.date}
                      </span>
                    </div>
                  </div>
                  <div className='mt-10 text-left flex-grow'>
                    <h3 className='text-xl md:text-2xl font-semibold text-gray-900 mb-2 line-clamp-2'>
                      {items.title}
                    </h3>
                    <p className='text-base font-normal text-black/50 opacity-80 line-clamp-3'>
                      {items.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  )
}

export default Expert