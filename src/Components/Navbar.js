import React, {useState}  from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [Click, setClick] = useState (false);
  const [button, setButton] = useState(true);


  const handleClick = () => setClick (!Click)
  const closeMobileMenu = () => setClick (false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false)
    }else{
      setButton(true)
    }
  };
  

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='Navbar'>
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
            TRVL <i className="fab fa-typo3" />
            </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={Click ? 'fas fa-times' : 'fas fa-bars'} />

          </div>
          <ul className={Click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to='/' className='nav-links' onClick ={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/Services' className='nav-links' onClick ={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/Products' className='nav-links' onClick ={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/sign-up' className='nav-links-mobile' onClick ={closeMobileMenu}>
                Sign up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle = 'btn--outline'>SIGN UP</Button>}
        </div>

    </nav>
    </>
  )
}

export default Navbar