import React, { useState } from 'react'
import { Advantages, Contacts, Delivery, Header, Modal, OurCases, Reviews } from '../components'

const Home = () => {

  
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className=''>
      <Header />
      <Advantages />
      <OurCases handleOpen={handleOpen} />
      <Delivery handleOpen={handleOpen} />
      <Reviews />
      <Contacts />

      <Modal handleOpen={handleOpen} open={open} />
    </div>
  )
}

export default Home