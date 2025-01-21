"use client";

import React, { useState } from 'react'
import UpArr from "../../../public/assets/upArrBefore.svg"
import Image from 'next/image';

const ButtonUp = ({ className, scrollUp }: {
  className?: string,
  scrollUp: (e: React.MouseEvent) => void
}) => {
  
//   const upBtn = document.querySelector("#upBtn")?.addEventListener("mouseover", () => {})
  const [fillColor, setFillColor] = useState("white")

  const changeArr = (e: React.MouseEvent) => {
    const inner = document.querySelector("#inner")
    console.log(inner?.classList)
    inner?.classList?.remove("fill-white")
    inner?.classList.add("fill-black")
    inner?.classList.add("duration-200")
  }

  const leaveRestore = (e: React.MouseEvent) => {
    const inner = document.querySelector("#inner")
    console.log(inner?.classList)
    inner?.classList?.remove("fill-black")
    inner?.classList.add("fill-white")
    inner?.classList?.remove("duration-200")
  }

  return (
    <div onMouseMove={changeArr} onClick={scrollUp} onMouseLeave={leaveRestore} id='container' className={`bg-black hover:bg-white hover:duration-300 inline-block rounded-full hover:scale-105 ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="arr" height="50" width="50"><desc>Keyboard Arrow Up Fill Streamline Icon: https://streamlinehq.com</desc><path id='inner' fill={`${fillColor}`} d="m12 10.15 -4.925 4.925L6 14l6 -6 6 6 -1.075 1.075L12 10.15Z" strokeWidth={0.5}></path></svg>
    </div>
  )
}

export default ButtonUp