import React from 'react'
import { BackgroundLines } from './ui/background-lines'
import LandingButton from './ui/landingButton'

const AboutHero = ({ onClick }: { onClick: (e: React.MouseEvent) => void }) => {

    return (
    <BackgroundLines>
          <nav className='flex w-full gap-[3rem] flex-row-reverse mt-4 p-4 h-[10vh] backdrop-blur-sm sticky'>
            <LandingButton>Login</LandingButton>
            <LandingButton>Get started!</LandingButton>
          </nav>
          <div className="h-[40rem] w-full rounded-md  relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4 text-center">
              <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
                Welcome to TaskTorch!
              </h1>
              <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm relative z-10 mt-5">
                Ignite productivity and light your way to project success.
              </p>
              {/* <Link href="/login" passHref> */}
                <button onClick={onClick} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-6">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-gray-800 hover:duration-300">
                    Click here to find out more!
                  </span>
                </button>
    
                {/* <Button
                  variant='ghost'
                  className="rounded-md z-10 px-4 py-2 text-white shadow-md hover:bg-gray-800 hover:duration-500 focus:ring-2 focus:ring-gray-400 mt-5 pointer-events-auto">
                  Click here to find out more!
                </Button> */}
              {/* </Link> */}
            </div>
          </div>
        </BackgroundLines>
  )
}

export default AboutHero