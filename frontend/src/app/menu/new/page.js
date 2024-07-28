import MenuForm from '@/components/Form'
import Header from '@/components/Header'
import React from 'react'

function Page() {
  return (
    <>
      <div>
        <Header title="Create new menu with AI" route="/menu" />
      </div>
      <div>
        <MenuForm />
      </div>
    </>
  )
}

export default Page