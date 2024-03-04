import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Accenture from './Works/Accenture'
import AIESEC from './Works/AIESEC'
import Confluence from './Works/Confluence'
import IotIot from './Works/IotIot'
import Stop from './Works/Stop'

const Experience = () => {
  const[workAcc,setWorkAcc]=useState(true)
  const[workCon,setWorkCon]=useState(false)
  const[workIot,setWorkIot]=useState(false)
  const[workStop,setWorkStop]=useState(false)
  const[workAiesec,setWorkAiesec]=useState(false)
  const handleAcc=()=>{
    setWorkAcc(true)
    setWorkAiesec(false)
    setWorkCon(false)
    setWorkIot(false)
    setWorkStop(false)
  }
  const handleStop=()=>{
    setWorkAcc(false)
    setWorkAiesec(false)
    setWorkCon(false)
    setWorkIot(false)
    setWorkStop(true)
  }
  const handleAie=()=>{
    setWorkAcc(false)
    setWorkAiesec(true)
    setWorkCon(false)
    setWorkIot(false)
    setWorkStop(false)
  }
  const handleCon=()=>{
    setWorkAcc(false)
    setWorkAiesec(false)
    setWorkCon(true)
    setWorkIot(false)
    setWorkStop(false)
  }
  const handleIot=()=>{
    setWorkAcc(false)
    setWorkAiesec(false)
    setWorkCon(false)
    setWorkIot(true)
    setWorkStop(false)
  }
  return (
    <section id='experience' className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'>
      <SectionTitle title='Where I have Worked' titleNo="02" />
      <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className='md:w-32 flex flex-col'>
          <li onClick={handleAcc} className={`${workAcc
                                                ? "border-l-textGreen text-textGreen "
                                                : "border-l-hoverColor text-textDark "}
                                                border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
            Accenture
          </li>
          <li onClick={handleCon} className={`${workCon
                                                ? "border-l-textGreen text-textGreen "
                                                : "border-l-hoverColor text-textDark"}  border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
            Confluence
          </li>
          <li onClick={handleAie} className={`${workAiesec
                                                ? "border-l-textGreen text-textGreen "
                                                : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
            AIESEC
          </li>
          <li onClick={handleStop} className={`${workStop
                                                ? "border-l-textGreen text-textGreen "
                                                : "border-l-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
            1stop.ai
          </li>
          <li onClick={handleIot} className={`${workIot
                                                ? "border-l-textGreen text-textGreen "
                                                : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
            IotIot.in
          </li>
        </ul>
        {workAcc && <Accenture/>}
        {workAiesec && <AIESEC/>}
        {workCon && <Confluence/>}
        {workIot && <IotIot/>}
        {workStop && <Stop/>}
      </div>
    </section>
  )
}

export default Experience
