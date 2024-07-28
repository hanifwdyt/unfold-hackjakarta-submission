import Header from '@/components/Header'
import Items from '@/components/Items'
import { getAllMenus } from '@/lib/menu'
import { unstable_noStore } from 'next/cache'
import React from 'react'

async function Page() {
  unstable_noStore()
  const data = await getAllMenus()

  return (
    <>
      <div>
        <Header title="Menu" route="/" />
      </div>
      <div>
        <Items data={data} />
      </div>
    </>
  )
}

export default Page