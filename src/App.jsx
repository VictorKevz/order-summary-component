import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {

  return (
    <>
     <div className='outer-container'>
      <div className='inner-container'>
        <div className='grid-container'>
          <Card/>
        </div>
      </div>
      <Footer/>
      </div> 
    </>
  )
}

export default App
