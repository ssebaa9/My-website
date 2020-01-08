import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <h3 className="footer__sub-title">Contact:</h3>
        <p className="footer__contact-elem">Email Adress: sebastian.debicki5@gmail.com</p> <span></span>
      </div>
      <div className="footer__follow">
        <h3 className="footer__sub-title">Follow me:</h3>
        <a className='footer__follow-link' href="https://github.com/ssebaa9"><i className="fab fa-github footer__follow-elem"></i></a>
        <a className='footer__follow-link' href="https://www.facebook.com/sebastian.debicki5"><i className="fab fa-facebook footer__follow-elem"></i></a>
        <a className='footer__follow-link' href="https://www.instagram.com/ssebaa9/?hl=pl"><i className="fab fa-instagram footer__follow-elem"></i></a>
      </div>
      <p className="footer__copy-right">&copy; Sebastian Dębicki</p>
    </footer>
  );
}

export default Footer;