import Approach from '@/components/Approach'
import Footer from '@/components/Footer'
import Grid from '@/components/Grid'
import React from 'react'

const About = () => (
    <div className='relative bg-black-100 flex justify-center items-center flex-col py-8 overflow-clip mx-auto sm:px-10 px-5'>
        <div className="max-w-7xl w-full">

            <Grid />
            <Approach />
            <Footer />

        </div>
    </div>
)

export default About
