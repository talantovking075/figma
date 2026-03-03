import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
    <div className='contanier con2'>
      <h1>BrandLogo</h1>
      <ul>
        <li><a href="#">Bosh sahifa</a></li>
        <li><a href="#">Katalog</a></li>
        <li><a href="#">Haqimizda</a></li>
        <li><a href="#">Aloqa</a></li>
      </ul>
      <div className='pole'>
        <input type="search" name="" id="" placeholder='Siz nima qidiryapsiz?' />
      <button className='aloqa'>Aloqaga Chiqish</button>
      </div>
    </div>
  )
}

export default Navbar

