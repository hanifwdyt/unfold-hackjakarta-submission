import { BsBag } from "react-icons/bs";
import { BiFoodMenu, BiStore } from "react-icons/bi";
import { GoMegaphone, GoPackage } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineShowChart } from "react-icons/md";
import { LiaStoreAltSolid } from "react-icons/lia";

const menuItems = [
  { icon: <BsBag className="text-3xl" />, label: "Orders" },
  { icon: <BiFoodMenu className="text-3xl" />, label: "Menu" },
  { icon: <GoMegaphone className="text-3xl" />, label: "Marketing", isNew: true },
  { icon: <HiOutlineUsers className="text-3xl" />, label: "Employees" },
  { icon: <BiStore className="text-3xl" />, label: "Store" },
  { icon: <MdOutlineShowChart className="text-3xl" />, label: "Insights", isNew: true },
  { icon: <LiaStoreAltSolid className="text-3xl" />, label: "GrabKios" },
  { icon: <GoPackage className="text-3xl" />, label: "Express", isNew: true }
];

export default function Menu() {
  return (
    <div className='flex flex-wrap gap-6 p-3 justify-center'>
      {menuItems.map((item, index) => (
        <div key={index} className='w-16 h-16 rounded-xl border-2 text-gray-600 grid place-content-center relative'>
          {item.icon}
          <span className="absolute text-[10px] text-center w-full -bottom-4">
            {item.label}
          </span>
          {item.isNew && (
            <span className="bg-red-700 text-[10px] text-white absolute -right-2 -top-2 px-[5px] py-[1px] rounded-full">
              New
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
