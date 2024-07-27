"use client";

import { sanomatSans } from "@/config/fontConfig";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { MdArrowBackIos } from "react-icons/md";

function Header() {
  const path = usePathname()

  const head = path.split('/')[1].charAt(0).toUpperCase() + path.split('/')[1].slice(1)
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
          href="/"
          prefetch={false}
        >
          <MdArrowBackIos />
        </Link>
        <span className={`${sanomatSans.className} font-bold`}>
          {head}
        </span>
      </div>
  )
}

export default Header