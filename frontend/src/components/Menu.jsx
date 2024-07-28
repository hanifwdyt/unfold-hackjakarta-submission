import { sanomatSans } from '@/config/fontConfig'
import Image from 'next/image'
import Link from 'next/link'

const menuItems = [
  { src: "/assets/images/resources/food.png", width: 51, height: 50, alt: "food", label: "Orders", url: "#" },
  { src: "/assets/images/resources/mart.png", width: 51, height: 50, alt: "mart", label: "Menu", url: "/menu" },
  { src: "/assets/images/resources/delivery.png", width: 51, height: 50, alt: "delivery", label: "Loans", url: "#" },
  { src: "/assets/images/resources/transport.png", width: 51, height: 50, alt: "transport", label: "Marketing", url: "#" },
  { src: "/assets/images/resources/bag.png", width: 51, height: 50, alt: "bag", label: "Employee", url: "#" },
  { src: "/assets/images/resources/discount.png", width: 51, height: 50, alt: "discount", label: "Store", url: "#" },
  { src: "/assets/images/resources/gift.png", width: 51, height: 50, alt: "gift", label: "Insight", url: "#" },
  { src: "/assets/images/resources/more-circle.png", width: 47, height: 46, alt: "more-circle", label: "More", url: "#" },
];

function Menu() {
  return (
    <div className='flex flex-wrap gap-4 px-8 py-3 justify-around'>
      {menuItems.map((item, index) => (
        <Link
          key={index}
          prefetch={false}
          href={item.url}
          className='w-1/5 flex flex-col items-center'
        >
          <Image
            src={item.src}
            width={item.width}
            height={item.height}
            alt={item.alt}
            priority={true}
          />
          <h6 className={`${sanomatSans.className} text-sm text-center mt-1`}>
            {item.label}
          </h6>
        </Link>
      ))}
    </div>
  )
}

export default Menu;
