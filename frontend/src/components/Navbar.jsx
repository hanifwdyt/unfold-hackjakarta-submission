import React from 'react'
import { BiWallet } from 'react-icons/bi';
import { BsFillWalletFill } from 'react-icons/bs';
import { FiHome } from "react-icons/fi";
import { IoAppsOutline, IoChatboxOutline, IoWalletOutline } from 'react-icons/io5';
export default function Navbar() {
  return (
    <div className='fixed bottom-0 flex sm:w-[428px] w-full py-4 text-gray-500 justify-around bg-zinc-200 bg-opacity-45 border-t'>
      <div className='flex w-full flex-col items-center'>
        <FiHome className='text-3xl' />
        <span className='text-[10px]'>Menu</span>
      </div>
      <div className='flex w-full flex-col items-center'>
        <IoWalletOutline className='text-3xl' />
        <span className='text-[10px]'>Menu</span>
      </div>
      <div className='flex w-full flex-col items-center'>
        <IoChatboxOutline className='text-3xl' />
        <span className='text-[10px]'>Menu</span>
      </div>
      <div className='flex w-full flex-col items-center'>
        <IoAppsOutline className='text-3xl' />
        <span className='text-[10px]'>Menu</span>
      </div>
    </div>
  )
}
