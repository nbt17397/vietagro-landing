'use client'

import Image from 'next/image'

const Cook = () => {
  return (
    <section className='relative' id='aboutus'>
      <div className='container px-4'>
        {/* Khối nội dung chính (ảnh đầu bếp và text) */}
        <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>
          <div className='lg:col-span-6 flex lg:justify-start justify-center'>
            <Image
              src='/images/Cook/cook.webp'
              alt='nothing'
              width={636}
              height={808}
            />
          </div>
          <div className='lg:col-span-6 flex flex-col justify-center items-center lg:items-start'>
            <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase lg:text-start text-center'>
              About Us
            </p>
            <h2 className='lg:text-start text-center'>
              VIETARGO - Xuất Khẩu Nông Sản Việt. ssssssssssssss
            </h2>
            <p className='text-black/50 text-lg font-normal my-5 text-start'>
              Chào mừng quý khách hàng và đối tác đến với VietArgo – một công ty hàng đầu trong lĩnh vực sản xuất và xuất khẩu các mặt hàng liên quan đến nông nghiệp và năng lượng. Chúng tôi tự hào với truyền thống cam kết chất lượng cao và dịch vụ khách hàng xuất sắc.
            </p>
            <p className='text-black/50 text-lg font-normal mb-10 text-start'>
              Hơn nữa, VietArgo nhấn mạnh việc phát triển các sản phẩm năng lượng tái tạo như mùn cưa và viên nén từ gỗ, góp phần vào những nỗ lực chung của cộng đồng quốc tế trong bảo vệ môi trường và giảm lượng khí nhà kính phát ra
            </p>
            <p className='text-black/50 text-lg font-normal mb-10 text-start'>
              Với đội ngũ chuyên gia giàu kinh nghiệm và sự hiểu biết sâu rộng về ngành nông nghiệp, chúng tôi không ngừng nỗ lực cung cấp các sản phẩm đa dạng và một mạng lưới nhà cung cấp đáng tin cậy. Chúng tôi tích cực tham gia vào quá trình phát triển các giải pháp sáng tạo, nhằm đáp ứng nhanh chóng các yêu cầu đa dạng của thị trường toàn cầu.
            </p>
            {/* <button className='text-xl font-medium rounded-full text-white py-3 px-8 duration-300 bg-primary w-fit border border-primary hover:bg-transparent hover:text-primary hover:cursor-pointer'>
              Learn more
            </button> */}
          </div>
        </div>
      </div>
      
      {/* Khối hình ảnh Burger (đã được di chuyển ra khỏi container để đặt nó sau nội dung chính) */}
      <div className='absolute right-0 bottom-[-18%] xl:block hidden' style={{ zIndex: -1 }}>
        <Image
          src='/images/Cook/burger.webp'
          alt='burger-image'
          width={363}
          height={522}
        />
      </div>
    </section>
  )
}

export default Cook