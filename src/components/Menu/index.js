import React from 'react';
import Logo from '../../assets/img/Logo.png'
// import ButtonLink from '../ButtonLink'
import Button from '../Button'
import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
        <a href="/">
            <img className="Logo" src={Logo} />
        </a>
        <Button href="/" className="ButtonLink">
            Novo vídeo
        </Button>
    </nav>
  );
}

export default Menu
