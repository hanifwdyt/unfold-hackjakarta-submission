"use client";

import { sanomatSans } from '@/config/fontConfig';
import Image from 'next/image';
import { useState } from 'react';
import { MdAddToPhotos, MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { IoAddCircle, IoListOutline } from "react-icons/io5";
import { PiOpenAiLogoLight } from "react-icons/pi";
import { RiEditLine } from "react-icons/ri";
import { HiChartBar } from "react-icons/hi";
import { FiPlus } from 'react-icons/fi';
import Link from 'next/link';

const menuItemsData = [
  {
    id: 1,
    name: "Nasi Ayam",
    description: "Nikmati kelezatan Ayam Bakar kami yang dibumbui rempah-rempah khas dan dibakar hingga sempurna. Disajikan dengan sambal, sayuran segar, dan nasi putih hangat, hidangan ini siap memanjakan lidah Anda dengan cita rasa otentik Indonesia.",
    price: "Rp. 35.900",
    image: "/assets/images/resources/ayam-bakar.png",
    alt: "ayam-bakar",
  },
  {
    id: 2,
    name: "Ayam Cabe Ijo",
    description: "Rasakan pedasnya Ayam Cabe Ijo kami yang khas, dengan potongan ayam yang dimasak bersama sambal hijau dari cabai hijau segar, bawang merah, dan bumbu-bumbu pilihan. Hidangan ini menawarkan perpaduan rasa pedas dan gurih yang menggugah selera. Cocok disajikan dengan nasi putih hangat untuk makan siang atau malam Anda.",
    price: "Rp. 35.900",
    image: "/assets/images/resources/cabe-ijo.png",
    alt: "ayam-cabe-ijo",
  }
];

const TabNavigation = ({ items, setItems }) => (
  <div className='flex'>
    <div
      className={`${sanomatSans.className} w-1/2 border-b ${items ? 'text-green-500 border-green-500' : 'text-gray-500 border-gray-500'} p-4 font-bold grid place-content-center cursor-pointer`}
      onClick={() => setItems(true)}
    >
      Items
    </div>
    <div
      className={`${sanomatSans.className} w-1/2 border-b ${!items ? 'text-green-500 border-green-500' : 'text-gray-500 border-gray-500'} p-4 font-bold grid place-content-center cursor-pointer`}
      onClick={() => setItems(false)}
    >
      Options Group
    </div>
  </div>
);

const CategoryHeader = () => (
  <div className='flex w-full justify-between mt-8 px-3'>
    <h5 className={`${sanomatSans.className} text-xl font-bold`}>Nama Kategori</h5>
    <div className='p-2 bg-gray-300 rounded-full text-black text-xl'>
      <MdKeyboardArrowDown />
    </div>
  </div>
);

const MenuItem = ({ item, enabled, onToggle, onClick }) => (
  <li className='p-3 bg-white border-2 flex rounded-md w-full justify-between gap-3' onClick={onClick}>
    <Image
      src={item.image}
      width={120}
      height={120}
      priority={true}
      alt={item.alt}
      className='w-fit h-fit'
    />
    <div>
      <h2 className={`${sanomatSans.className} font-bold`}>{item.name}</h2>
      <p className={`${sanomatSans.className} text-gray-500 line-clamp-2 text-xs my-1`}>{item.description}</p>
      <h5 className={`${sanomatSans.className} text-sm`}>{item.price}</h5>
    </div>
    <label className="relative inline-flex items-center cursor-pointer" onClick={(event) => event.stopPropagation()}>
      <input type="checkbox" className="sr-only" checked={enabled} onChange={onToggle} />
      <div className={`w-11 h-6 ${enabled ? 'bg-green-500' : 'bg-gray-300'} rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200`}>
        <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${enabled ? 'translate-x-5' : 'translate-x-0'}`}></div>
      </div>
    </label>
  </li>
);

function Items() {
  const menuDisable = menuItemsData.map(item => ({ id: item.id, enabled: false }));

  const [items, setItems] = useState(true);
  const [enabledItems, setEnabledItems] = useState(menuDisable);
  const [showEdit, setShowEdit] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  const toggleItem = (id) => {
    setEnabledItems(enabledItems.map(item =>
      item.id === id ? { ...item, enabled: !item.enabled } : item
    ));
  };

  const handleShow = (options) => {
    if (options === 'create') {
      setShowCreate(false);
      setEnabledItems(menuDisable);
    } else {
      setShowEdit(false);
      setEnabledItems(menuDisable);
    }
  };

  return (
    <>
      {showEdit &&
        <div id="background" className="fixed inset-0 bg-black bg-opacity-25 z-50 flex items-end justify-center" onClick={() => handleShow('edit')}>
          <div className="bg-white rounded-t-lg shadow-lg w-full sm:w-[428px]">
            <div className="p-4">
              <Link 
              href={`/`}
              prefetch={false}
              className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <PiOpenAiLogoLight />
                  <span className="text-lg font-medium">Enhance menu with AI</span>
                  <span className="bg-red-500 text-white text-[10px] px-2 py-1 rounded-full">new</span>
                </div>
                <MdKeyboardArrowRight />
              </Link>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <RiEditLine />
                  <span className="text-gray-700">Edit item</span>
                </div>
                <MdKeyboardArrowRight />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <IoListOutline />
                  <span className="text-gray-700">Manage sales limit</span>
                </div>
                <MdKeyboardArrowRight />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <HiChartBar />
                  <span className="text-gray-700">See item insights</span>
                </div>
                <MdKeyboardArrowRight />
              </div>
            </div>
          </div>
        </div>
      }
      {showCreate &&
        <div id="background" className="fixed inset-0 bg-black bg-opacity-25 z-50 flex items-end justify-center" onClick={() => handleShow('create')}>
          <div className="bg-white rounded-t-lg shadow-lg w-full sm:w-[428px]">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <PiOpenAiLogoLight />
                  <span className="text-lg font-medium">Enhance menu with AI</span>
                </div>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">new</span>
                <MdKeyboardArrowRight />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <IoAddCircle />
                  <span className="text-gray-700">Add a new item</span>
                </div>
                <MdKeyboardArrowRight />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <MdAddToPhotos />
                  <span className="text-gray-700">Add a new category</span>
                </div>
                <MdKeyboardArrowRight />
              </div>
            </div>
          </div>
        </div>
      }
      <div className='flex flex-col h-screen justify-between'>
        <div>
          <TabNavigation items={items} setItems={setItems} />
          <CategoryHeader />
          <ul className='flex flex-col gap-2 mt-4 px-3'>
            {menuItemsData.map((item, index) => (
              <MenuItem
                key={index}
                item={item}
                enabled={enabledItems.find(enabledItem => enabledItem.id === item.id).enabled}
                onToggle={() => toggleItem(item.id)}
                onClick={() => setShowEdit(true)}
              />
            ))}
          </ul>
        </div>
        <div className='flex w-full sm:w-[428px] fixed justify-end bottom-24 pr-8' onClick={() => setShowCreate(true)}>
          <button className='bg-green-500 px-3 py-2 rounded-lg flex items-center gap-1'>
            <FiPlus className='text-white' />
            <span className={`${sanomatSans.className} text-white text-sm`}>
              Tambah
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Items;
