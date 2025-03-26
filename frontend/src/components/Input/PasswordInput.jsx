import React from 'react';
import { useState } from 'react'
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa';
const PasswordInput = ({value, onChange, placeholder}) => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };
  return (
    <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded'>
        <input type={isShowPassword ? 'text' : 'password'} value={value} onChange={onChange} placeholder={placeholder || "Password"} className='w-full py-2 bg-transparent outline-none'/>    
    {isShowPassword ? (<FaRegEye className='cursor-pointer' onClick={()=>toggleShowPassword()}/>):(<FaRegEyeSlash className='cursor-pointer' onClick={()=>toggleShowPassword()}/>)}
    </div>

  )
}

export default PasswordInput