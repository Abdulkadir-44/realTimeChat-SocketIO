import React from 'react'
import { useFormElements } from "../context/FormContext"
const Login = ({ setShowChat, socket }) => {
  const { userName, setUserName, roomId, setRoomId } = useFormElements()

  const sendRoomId = async e => {
    if (roomId !== "") {
      e.preventDefault()
      await socket.emit("roomId", roomId)
      setShowChat(true)
    }
    else {
      e.preventDefault()
      alert("Lütfen roomId değeri girin...")
    }

  }
  return (
    <div className='w-1/3 bg-transparent backdrop-blur-lg border-1 border-purple-400 shadow-2xl  h-[450px] rounded-md font-poppins'>
      <h1 className='text-center mb-9 poppins-semibold-italic text-4xl text-white mt-7'>Join the Chat Room !</h1>
      <form onSubmit={sendRoomId}
        className='flex flex-col items-center gap-y-6 '>
        <input value={userName} onChange={e => setUserName(e.target.value)}
          className='input-primary'
          type="text"
          placeholder='username'
        />
        <input value={roomId} onChange={e => setRoomId(e.target.value)}
          className='input-primary'
          type="text"
          placeholder='room Id'
        />
        <button type='submit' className='poppins-medium duration-150 text-lg bg-[#7E5CBA] rounded-md text-white px-12 py-3 hover:bg-[#6A47AE]'>Join</button>
      </form>
    </div>
  )
}

export default Login