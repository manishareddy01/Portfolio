import React from 'react'

const RightSide = () => {
  return (
    <div className='w-full h-full flex-col items-center flex justify-end gap-6 text-textLight '>
        <a href='mailto:manishaaddula@gmail.com'>
        <p className='text-sm rotate-90 w-72 tracking-wide text-textGreen '>Contact me here</p>
        </a>
        <span className='w-[2px] h-32 bg-textDark inline-flex'></span>
    </div>
  )
}

export default RightSide
