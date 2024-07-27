import Header from '@/components/Header'
import Menu from '@/components/Menu'
import Profile from '@/components/Profile'
import React from 'react'

function Page() {
  return (
    <>
      <Header />
      <div className='my-4'>
        <Profile />
      </div>
      <div className='my-4'>
        <Menu />
      </div>
    </>
  )
}

export default Page