import { MdArrowForwardIos } from "react-icons/md";

export const SalesInfo = () => (
  <div className='p-4 my-2 flex justify-between items-center'>
    <div className='flex flex-col gap-1'>
      <h6 className='text-xs'>Total Sales Today</h6>
      <span className='text-xl font-semibold'>Rp120.000</span>
    </div>
    <MdArrowForwardIos className='text-xl' />
  </div>
);