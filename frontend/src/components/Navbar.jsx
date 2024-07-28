"use client"

import React, { useState } from 'react';
import { GoHomeFill } from 'react-icons/go';
import { IoAppsOutline, IoChatboxOutline, IoWalletOutline } from 'react-icons/io5';

const navItems = [
  { id: 1, icon: <GoHomeFill className='text-3xl' />, label: 'Menu' },
  { id: 2, icon: <IoWalletOutline className='text-3xl' />, label: 'Inbox' },
  { id: 3, icon: <IoChatboxOutline className='text-3xl' />, label: 'Finance' },
  { id: 4, icon: <IoAppsOutline className='text-3xl' />, label: 'More' }
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <div className='fixed bottom-0 flex sm:w-[428px] z-0 w-full py-4 text-gray-500 justify-around bg-[#f6f6f6] border-t'>
      {navItems.map(item => (
        <div
          key={item.id}
          className={`flex w-full flex-col items-center ${activeItem === item.id ? 'text-green-400' : ''}`}
          onClick={() => setActiveItem(item.id)}
        >
          {React.cloneElement(item.icon, { className: `text-3xl ${activeItem === item.id ? 'text-green-400' : ''}` })}
          <span className={`text-[10px] ${activeItem === item.id ? 'text-green-400' : ''}`}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
