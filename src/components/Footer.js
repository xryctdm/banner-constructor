import React from 'react';
import './Footer.css';

function Footer () {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p className="footer__text">Dmitry Khrustalev</p>
                <a className="footer__email" href="mailto:xryctdm@gmail.com" target="_blank" rel="noreferrer">xryctdm@gmail.com</a>
            </div>
        </footer>
    );
}

export default Footer;