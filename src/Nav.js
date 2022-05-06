import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    let scrollHandler = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      {/* <div className="nav"> */}
      <img
        className="nav__logo"
        // src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
        // src="https://i.ibb.co/C0V37Jn/39fb1995180d6b51f1cdc816e8b0ada3.png"
        src="https://fontmeme.com/permalink/220505/b1a3ae862796559d435be18c00c4b007.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
