import React from 'react'

const page = () => {
  return (
    <div className='grid grid-cols-2 gap-3 m-4 h-[calc(100vh-2rem)]'>
        <div className='border border-white'>
            Col 1
        </div>
        <div className='border border-white'>
            Col 2
        </div>
    </div>
  )
}

export default page