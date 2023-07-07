"use client";

import Image from 'next/image'
import { CustomButtonProps } from '@/types';
import React from 'react'

const CustomButton = ({title, containerStyles, handleClick, btnType}: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className= "flex-1 text-blue"> {title} </span>

        </button>
  )
}

export default CustomButton