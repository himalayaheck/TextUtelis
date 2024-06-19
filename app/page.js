"use client"
import React, { useState } from 'react'
import Navbar from './componants/Navbar'
import Textbox from './componants/Textbox'
import About from './componants/About'
import Alert from './componants/Alert'






const page = () => {
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert(
      {
        msg: message,
        type: type

      }
    )
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  return (


    <>
      
        <Navbar title="TextUtelis" />

        <Alert alert={alert} />
      
        <Textbox text="Your Text" showAlert={showAlert}/>
        <About/>
       

          
        
      






    </>
  )
}

export default page
