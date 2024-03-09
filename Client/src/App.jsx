import React, { useState } from 'react'
import Login from "./components/Login"
import Chat from "./components/Chat"
import bg from "./assets/cloudBg.jpg"
import io from "socket.io-client"

const socket = io.connect("http://localhost:3000")

const App = () => {

  const backgroundImage = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover"
  }
  const [showChat, setShowChat] = useState(false)
  return (
    <div style={backgroundImage} className='min-h-screen flex justify-center items-center'>

      {
        !showChat ? <Login setShowChat={setShowChat} socket={socket} /> : <Chat socket={socket} />
      }
    </div>
  )
}

export default App