import { BsBag } from "react-icons/bs";
import { BiFoodMenu, BiStore } from "react-icons/bi";
import { GoMegaphone, GoPackage } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineShowChart } from "react-icons/md";
import { LiaStoreAltSolid } from "react-icons/lia";

export default function Menu() {
  return (
    <div className='flex flex-wrap gap-6 p-3 justify-center'>
      <div className='w-16 h-16 rounded-xl border-2 text-gray-600 grid place-content-center text-2xl'>
        <BsBag />
      </div>
      <div className='w-16 h-16 rounded-xl border-2 text-gray-600 grid place-content-center text-2xl'>
        <BiFoodMenu />
      </div>
      <div className='w-16 h-16 rounded-xl border-2 text-gray-600 grid place-content-center text-2xl'>
        <GoMegaphone />
      </div>
      <div className='w-16 h-16 rounded-xl border-2 text-gray-600 grid place-content-center text-2xl'>
        <HiOutlineUsers />
      </div>
      <div className='w-16 h-16 rounded-xl border-2 text-gray-600 grid place-content-center text-2xl'>
        <BiStore />
      </div>
      <div className='w-16 h-16 rounded-xl border-2 text-gray-600 grid place-content-center text-2xl'>
        <MdOutlineShowChart />
      </div>
      <div className='w-16 h-16 rounded-xl border-2 text-gray-600 grid place-content-center text-2xl'>
        <LiaStoreAltSolid />
      </div>
      <div className='w-16 h-16 rounded-xl border-2 text-gray-600 grid place-content-center text-2xl'>
        <GoPackage />
      </div>
    </div>
  )
}
