import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed md:absolute sm:right-0 left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:z-10'>
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
        <CircularText className={"fill-dark stroke-2 animate-spin-slow dark:fill-light"}/>
        <Link href="mailto:mohit.parmar2025@gmail.com" className='dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:bg-light flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark md:w-12 md:h-12 md:text-[10px]'>
            Hire Me
        </Link>
      </div>
    </div>
  )
}

export default HireMe
