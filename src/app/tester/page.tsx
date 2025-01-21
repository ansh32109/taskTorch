import React from 'react'

const page = () => {
  return (
    <div className='grid grid-cols-2 gap-2 m-2'>
        <div className='border bg-green-500'>
            <div className='fixed border h-[50vh] border-red-600 left-5 top-5' />    
        </div> 
        <div className='border h-screen bg-yellow-400'>Hello</div>
    </div>
  )
}

export default page