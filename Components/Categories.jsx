import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import categoresImg from './../public/assets/categories.jpg'

const Categories = () => {
    return (
        <div className='h-full w-full flex justify-center'>
            <div className='h-full w-10/12'>
                <h2 className='mb-8 text-3xl text-[#333]'>Categories</h2>
                <div className='h-full w-full flex items-center justify-between'>
                    <Link href="/category/sunglasses" className='h-[325px] w-[325px] relative'>
                        <Image src={categoresImg} alt='' className='h-full w-full object-cover' />
                        <span className='absolute bottom-0 left-0 bg-orange-500 px-6 py-2 text-white'>Sunglasses</span>
                    </Link>
                    <Link href="/category/sunglasses" className='h-[325px] w-[325px] relative'>
                        <Image src={categoresImg} alt='' className='h-full w-full object-cover' />
                        <span className='absolute bottom-0 left-0 bg-orange-500 px-6 py-2 text-white'>Sunglasses</span>
                    </Link>
                    <Link href="/category/sunglasses" className='h-[325px] w-[325px] relative'>
                        <Image src={categoresImg} alt='' className='h-full w-full object-cover' />
                        <span className='absolute bottom-0 left-0 bg-orange-500 px-6 py-2 text-white'>Sunglasses</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Categories;