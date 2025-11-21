import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

const App = () => {
  return (
    <div className='h-screen'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App