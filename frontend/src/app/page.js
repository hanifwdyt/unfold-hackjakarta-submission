import Header from '@/components/Header'
import Menu from '@/components/Menu'
import Profile from '@/components/Profile'
import Section from '@/components/Section'
import React from 'react'

function Page() {
  return (
    <>
      <Header />
      <div className='my-8'>
        <Profile />
      </div>
      <div className='my-8'>
        <Menu />
      </div>
      <div className='my-8'>
        <Section />
      </div>
    </>
  )
}

export default Page