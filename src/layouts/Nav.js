import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css'
const list = [
  { name: 'Start', path: '/' },
  { name: 'Zabiegi', path: '/zabiegi' },
  { name: 'O nas', path: '/Onas' },
  { name: 'Kontakt', path: '/oferta' },
  { name: 'Cennik', path: '/cennik' }
];



const Nav = () => {
  const menu = list.map(item => (


    <li key='(item.name)'>
      <NavLink to={item.path}>{item.name}</NavLink>
    </li>
  ))



  return (
    <nav className="main">
      <ul>
        {menu}
      </ul>
    </nav>);


}
export default Nav;