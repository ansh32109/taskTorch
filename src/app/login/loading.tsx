import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const loading = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
        <div className='flex gap-2 border border-neutral-500 p-4 rounded-lg mb-5 relative'>
            <div className='items-center justify-center'>
                <Skeleton className='h-20 w-20 rounded-full'/>
            </div>
            <div>
                <Skeleton className='h-8 w-[10rem] mb-1'/>
                <Skeleton className='h-8 w-20 mt-3'/>
            </div>
        </div>
        <h3 className='text-neutral-500'>
            Loading your content...
        </h3>
    </div>
  )
}

export default loading