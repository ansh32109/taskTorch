import React from 'react'

interface Props {
    children: string
}

const LandingButton = ({ children }: Props) => {
  return (
    <button className='outline-none border border-neutral-700 px-5 py-2 rounded-xl hover:scale-105 hover:duration-100 hover:bg-gray-800'>
        {children}
    </button>
  )
}

export default LandingButton