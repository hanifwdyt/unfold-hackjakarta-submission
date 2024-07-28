"use client";

import Image from 'next/image'

function Banner() {
  return (
    <Image
      src="/assets/images/resources/banner-ai.png"
      width={240}
      height={240}
      quality={100}
      sizes='100vw'
      alt="banner"
      className='w-full h-auto'
    />
  )
}

export default Banner