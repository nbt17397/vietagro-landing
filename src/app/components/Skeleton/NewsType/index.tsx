import React from 'react';

// Giả lập component Skeleton cho Tin tức
const NewsSkeleton = () => {
    return (
        // Sử dụng lớp 'p-2' để phù hợp với khoảng cách trong Slider
        <div className='p-2'>
            <div className='m-3 my-10 p-10 text-center backdrop-blur-md bg-white/50 rounded-3xl animate-pulse h-full flex flex-col'>
                <div className='relative flex-shrink-0'>
                    {/* Placeholder Ảnh (tỷ lệ 362x262) */}
                    <div className='inline-block m-auto w-full max-h-[262px] rounded-xl bg-gray-300 aspect-video'></div>
                    {/* Placeholder Ngày đăng */}
                    <div className='absolute bottom-0 left-0 -translate-y-1/2 translate-x-1/4'>
                        <div className='w-20 h-8 bg-primary/50 rounded-lg shadow-lg'></div>
                    </div>
                </div>
                <div className='mt-10 text-left flex-grow'>
                    {/* Placeholder Tiêu đề */}
                    <div className='h-6 w-11/12 bg-gray-300 rounded mb-4'></div>
                    {/* Placeholder Tóm tắt dòng 1 */}
                    <div className='h-4 w-full bg-gray-200 rounded mb-2'></div>
                    {/* Placeholder Tóm tắt dòng 2 */}
                    <div className='h-4 w-5/6 bg-gray-200 rounded'></div>
                </div>
            </div>
        </div>
    );
};

export default NewsSkeleton;
