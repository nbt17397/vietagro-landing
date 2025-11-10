'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
// Nếu bạn có thư viện Iconify, bạn có thể import nó ở đây
// import { Icon } from '@iconify/react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  
  // Thay thế YOUR_WHATSAPP_NUMBER bằng số điện thoại của bạn (ví dụ: 84901234567)
  const WHATSAPP_NUMBER = '84903381454' 

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Xin%20chào,%20tôi%20muốn%20hỏi%20về%20các%20sản%20phẩm%20của%20bạn.`

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    // Nút cuộn lên trên sẽ hiển thị sau khi cuộn 300 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className='fixed bottom-8 right-8 z-50'>
      {/* Sử dụng flex-col và items-end để xếp chồng các nút theo chiều dọc (từ dưới lên) */}
      <div className='flex flex-col items-end gap-3'>
        
        {/* NÚT WHATSAPP ICON (LUÔN HIỂN THỊ) */}
        <Link
          href={whatsappLink}
          target='_blank' 
          aria-label='Chat via WhatsApp'
          // Thiết kế dưới dạng nút tròn nổi (FAB) với màu xanh lá WhatsApp
          className='flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition duration-300 ease-in-out hover:bg-[#128C7E] shrink-0'
        >
          {/* PLACEHOLDER ICON: Bạn nên thay thế bằng icon WhatsApp thực tế nếu dùng thư viện Iconify */}
          <span className='text-2xl'>&#x1F4AC;</span> 
          {/* Nếu dùng Iconify: <Icon icon="ic:baseline-whatsapp" width={24} /> */}
        </Link>
        
        {/* NÚT SCROLL TO TOP (CHỈ HIỂN THỊ KHI CUỘN) */}
        {isVisible && (
          <div
            onClick={scrollToTop}
            aria-label='scroll to top'
            // Nút cuộn lên trên nhỏ hơn và đặt ở dưới nút WhatsApp
            className='back-to-top flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-dark'
          >
            <span className='mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white'></span>
          </div>
        )}
      </div>
    </div>
  )
}