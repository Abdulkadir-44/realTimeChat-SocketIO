import React from 'react'
import {FaUserCircle} from "react-icons/fa"
import {MdSend} from "react-icons/md"
const Chat = () => {
  return (
    <div className='w-1/3 h-[500px] flex flex-col '>
      <div className='bg-[#613799] h-14 text-white flex items-center rounded-tl-md rounded-tr-md'>
        <div className='w-11 h-11 rounded-full bg-white ml-3 text-black'>
          <FaUserCircle className='w-11 h-11 text-purple-900'/>
        </div>
        <span className='poppins-light  ml-3'>Abdulkadir</span>
      </div>
      <div className='flex-1 bg-transparent backdrop-blur-lg overflow-y-auto p-2'>
        <div className='flex justify-start my-2'>
        <div className='w-1/2  text-white flex flex-col gap-y-1'>
          <div className='bg-indigo-900 poppins-light text-sm  px-2 py-1 rounded-xl rounded-br-none'>
          <p>Deneme mesajı kamon beybi hayde gel gidelium</p>
          </div>
          <p className='text-[10px] inline-flex justify-end'>Abdulkadir 12:00 pm</p>
        </div>
        </div>
        <div className='flex justify-end my-2'>
        <div className='w-1/2  text-white flex flex-col gap-y-1'>
          <div className='bg-[#581C87] poppins-light text-sm  px-2 py-1 rounded-xl rounded-br-none'>
          <p>Deneme mesajı kamon beybi hayde gel gidelium</p>
          </div>
          <p className='text-[10px] inline-flex justify-end'>Abdulkadir 12:00 pm</p>
        </div>
        </div>
      </div>
      <div className='h-12  w-full rounded-bl-md rounded-br-md flex '>
        <input className='poppins-regular placeholder:text-gray-500 placeholder:italic bg-gray-300 px-3 h-full rounded-bl-md w-5/6 outline-none' type="text" placeholder='Write a message...' />
        <button className='w-1/6 text-3xl inline-flex items-center justify-center text-white bg-indigo-950  h-full rounded-br-md hover:bg-purple-900 duration-100'>
          <MdSend />
        </button>
      </div>
    </div>
  )
}

export default Chat