import React from 'react'
import NavbarS from './NavbarSotuv/NavbarS'
import Navbar from './Navbar/Navbar'
import Intro from './Selection/Intro/Intro'
import Category from './Selection/Kategoriya/Category'
import FlashSales from './Selection/FlashSales/FlashSales'
const App = () => {
  return (
    <div>
      <NavbarS />
      <Navbar />
      <Intro />
      <Category />
      <FlashSales />
    </div>
  )
}

export default App
