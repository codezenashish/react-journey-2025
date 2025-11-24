import React from 'react'
import UserContextProvider from './context/userContextProvider'
import Login from './components/Login'
import Proflie from './components/Proflie'

const App = () => {
  return (
    <UserContextProvider>
      <div className="w-screen max-w-3xl flex flex-cal ">
       
      <Login />
      <Proflie />
      </div>
    </UserContextProvider>
  )
}

export default App