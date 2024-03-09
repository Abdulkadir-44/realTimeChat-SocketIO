import React from 'react'
import Login from "./components/Login"
import Chat from "./components/Chat"
import bg from "./assets/cloudBg.jpg"
const App = () => {

  const backgroundImage = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover"
  }
  
  return (
    <div style={backgroundImage} className='min-h-screen flex justify-center items-center'>
      {/* <Login /> */}
      {/* <Chat/> */}
    </div>
  )
}

export default App