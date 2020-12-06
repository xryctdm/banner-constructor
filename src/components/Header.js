import React from 'react';
import './Header.css';
import logoPath from '../images/logo.svg';

function Header () {
    return (
        <header className="header">
            <a href="https://www.avito.ru" target="_blank" rel="noreferrer">
                <img className="header__logo" src={logoPath} alt="logo" />
            </a>
            <h1 className="header__header">Создайте баннер вашей мечты!</h1>
        </header>
        
    );
}

export default Header;