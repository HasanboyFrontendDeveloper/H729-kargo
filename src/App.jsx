import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Contacts, Faq, Home, Manager } from './pages'
import { Footer, Navbar } from './components'

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/manager' element={<Manager />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/faq' element={<Faq />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App