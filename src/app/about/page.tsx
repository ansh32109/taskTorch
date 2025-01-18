'use client';

import React from 'react'
import AboutHero from '@/components/aboutHero';
import { FlipWords } from '@/components/ui/flip-words';
import './page.css'
import Image from 'next/image';
import collab from '../../../public/assets/collab.svg'
import CPF from '../../../public/assets/CPF.svg'
import Customize from '../../../public/assets/customize.svg'
import Manage from '../../../public/assets/manage.svg'

const Page = () => {
  
  const scrollDown = (e: React.MouseEvent) => {
    // window.scrollBy(0, window.innerHeight)
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth"
    })
    console.log('Scrolled down from page')
  }

  const words: string[] = ["faster", "smoother", "better"]
  
  return (
    <>
      <AboutHero onClick={scrollDown} /> 
      <div className='h-screen flex flex-col'>
        <div className='border-glow'>
          Work 
          <FlipWords words={words} duration={1000}/> <br />
          With the power of collaboration at your fingertips <br /><br />
          <p className='text-3xl mt-3 -mb-4'>
            Explore more features below:
          </p>
        </div>
        <div className='grid grid-cols-3 grid-rows-2 h-[60vh] w-[90vw] mx-auto mt-6 gap-3'>
          <div className='col-span-2 border rounded-xl flex hover:scale-[102.5%] hover:duration-150'>
            {/* Text */}
            <div className='flex flex-col w-[75%] p-4'>
              <h1 className='text-2xl text-center font-bold mt-5'>
                Real Time Collaboration
              </h1>
              <p className='mt-5 text-center text-neutral-400'>
              Say goodbye to email chains and scattered messages. With TaskTorch, collaborate effortlessly with team members in real time. Share updates, files, and feedback without missing a beat.
              </p>
            </div>
            <div className='border my-4' />
            {/* Image */}
            <div className='w-[25%] content-center justify-items-center'>
              <Image src={collab} width={100} height={100} alt='collab' className='h-[75%] w-[75%] items-center rounded-xl hover:scale-110 hover:duration-150'/>
            </div> 
          </div>
          <div className="row-span-2 border rounded-xl flex flex-col hover:scale-105 hover:duration-150">
            {/* image */}
            <div className='h-[60%] content-center justify-items-center'>
              <Image src={CPF} height={100} width={100} alt='Cross Platform Compatibility' className='h-[75%] w-[75%] hover:scale-110 hover:duration-150'/>
            </div>
            <div className='border mx-8' />
            {/* text */}
            <div className='flex flex-col text-left pl-4'>
              <h1 className='text-2xl font-bold mt-5'>Cross-Platform Access</h1>
              <p className='text-neutral-400 mt-5'>
              Whether you’re at your desk or on the go, TaskTorch works seamlessly on desktop, mobile, and tablet devices, keeping you connected wherever you are.
              </p>
            </div>
          </div>
          <div className='border rounded-xl flex hover:scale-105 hover:duration-150'>
            {/* text */}
            <div className='flex flex-col-reverse w-[50%] pl-4'>
              <h1 className='mb-5 text-2xl'>
                Customizability++
              </h1>
              <p className='mb-5 text-neutral-400'>
                Every team works differently, and TaskTorch adapts to you. Create workflows tailored to your unique project needs with drag-and-drop simplicity.
              </p>
            </div>
            <div className='border ml-4 my-4' />
            {/* image */}
            <div className='w-[50%] content-center justify-items-center'>
              <Image src={Customize} width={100} height={100} alt='customize' className='h-[60%] w-[60%] hover:scale-110 hover:duration-150' />
            </div>
          </div>
          <div className='border rounded-xl hover:scale-105 hover:duration-150 flex'>
            {/* image */}
            <div className='w-[50%] h-full content-center justify-items-center'>
              <Image src={Manage} width={100} height={100} alt='manage' className='w-[60%] hover:scale-110 hover:duration-150' />
            </div>
            <div className='border mr-4 my-4' />
            {/* text */}
            <div className='flex flex-col-reverse w-[50%]'>
              <h1 className='text-2xl mb-5'>
                TaskMastery
              </h1>
              <p className='mb-5 text-neutral-400'>
                Track every task with precision. From assigning responsibilities to setting deadlines and priorities, TaskTorch keeps your team aligned and focused.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
         
    
  )
}

export default Page
