import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";

export default function Profile() {
  return (
    <div className='px-3'>
      <div className='flex'>
        <IoLocationOutline />
        <span className='text-xs'>
          Lontong Cap Gomeh Rusmini - Sumagung
        </span>
      </div>
      <div className='flex flex-col'>
        <div className='flex justify-between mt-12'>
          <h5>Today's Highlights</h5>
          <span>1/1</span>
        </div>
        <div className='grid grid-cols-1 divide-y-[1px] shadow-lg rounded-lg border-[1px] mt-4 h-fit'>
          <div className='px-4 py-2 my-2 '>
            <div className='flex w-full items-center justify-between'>
              <div className='flex flex-col gap-1'>
                <h6 className='text-xs'>
                  Total Sales Today
                </h6>
                <span className='text-xl font-semibold'>
                  Rp120.000
                </span>
              </div>
              <MdArrowForwardIos className='text-xl' />
            </div>
          </div>

          <div className='grid grid-cols-2 text-xs divide-x-[1px]'>
            <div className='text-center p-2 flex gap-2 justify-center'>
              <span className='font-semibold'>
                0
              </span>
              <span>
                Orders
              </span>
            </div>
            <div className='text-center p-2 flex gap-2 justify-center'>
              <span className='font-bold'>
                0
              </span>
              <span>
                QR Payments
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
