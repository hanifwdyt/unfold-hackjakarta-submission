import { Location } from './Location';
import Image from 'next/image';
import { sanomatSans } from '@/config/fontConfig';

export default function Profile() {
  return (
    <div className='px-3'>
      <Location />
      <div className='flex flex-col mt-8'>
        <div className='flex w-full justify-between p-3 bg-zinc-200 bg-opacity-45 items-center'>
          <h5 className={`${sanomatSans.className} text-sm`}>Order Total</h5>
          <h3 className={`${sanomatSans.className} text-sm font-bold`}>Rp. 297.000</h3>
        </div>
        <div className='flex gap-1 mt-1'>
          <div className='w-1/2 p-3 bg-zinc-200 bg-opacity-45 flex justify-between items-center'>
            <div className='flex flex-col gap-1'>
              <h5 className={`${sanomatSans.className} text-sm`}>Order Total</h5>
              <h6 className={`${sanomatSans.className} font-bold text-sm`}>7 Orders</h6>
            </div>
            <Image
              src="/assets/images/resources/grab-pay.png"
              width={21}
              height={20}
              alt="grab pay"
              className='w-fit h-fit'
            />
          </div>
          <div className='w-1/2 p-3 bg-zinc-200 bg-opacity-45 flex justify-between items-center'>
            <div className='flex flex-col gap-1'>
              <h5 className={`${sanomatSans.className} text-sm`}>QR Payment</h5>
              <h6 className={`${sanomatSans.className} font-bold text-sm`}>0</h6>
            </div>
            <Image
              src="/assets/images/resources/crown.png"
              width={28}
              height={28}
              alt="crown"
              className='w-fit h-fit'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
