"use client";

import { sanomatSans } from "@/config/fontConfig";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { MdArrowBackIos } from "react-icons/md";

function Header({ title, route }) {
  const path = usePathname()

  return (
    path === '/' ?
      <div className='flex gap-1 text-xl p-3'>
        <span className='text-green-600'>Grab</span>
        &
        <span className='text-violet-600'>OVO</span>
        Merchant
      </div>
      :
      <div className='flex gap-2 text-xl p-3 items-center'>
        <Link
          href={route}
          prefetch={false}
        >
          <MdArrowBackIos />
        </Link>
        <span className={`${sanomatSans.className} font-bold`}>
          {title}
        </span>
      </div>
  )
}

export default Header