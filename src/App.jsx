import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Dashboard from './components/Dashboard'
import UserProfile from './components/UserProfile'
import ButtonClick from './components/ButtonClick'
import Greeting from './components/Greeting'
function App() {


  return (
    <>
{/* <WelcomeMessage/>
<br /> 
<hr /> 
<Dashboard/>
<br />
<hr />
<UserProfile/> */}
<ButtonClick/>
<br />
<Greeting/>
    </>
  )
}

export default App
