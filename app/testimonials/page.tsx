import Clients from '@/components/Clients'
import Footer from '@/components/Footer'
import React from 'react'

const TestimoialsPage = () => {
  return (
    <div className='relative bg-black-100 flex justify-center items-center flex-col pb-4 pt-24 overflow-clip mx-auto sm:px-10 px-5'>
        <div className="max-w-7xl w-full">
            <Clients/>
            <Footer/>
        </div>
    </div>
  )
}

export default TestimoialsPage
