import { sanomatSans } from '@/config/fontConfig'
import Image from 'next/image'

function Section() {
  return (
    <div>
      <h5 className={`${sanomatSans.className} px-3 mt-3 font-bold text-lg`}>
        Find your USP to increase sales
      </h5>
      <div className='w-full overflow-scroll flex gap-3 px-3 mt-4 scrollbar-hide'>
        <div className='relative min-w-[298px] h-[150px]'>
          <Image
            src="/assets/images/resources/card.png"
            alt='card'
            fill
          />
        </div>
        <div className='relative min-w-[298px] h-[150px]'>
          <Image
            src="/assets/images/resources/card.png"
            alt='card'
            fill
          />
        </div>
      </div>
    </div>
  )
}

export default Section