import React, {useState}  from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [Click, setClick] = useState (false);
  const handleClick = () => setClick (!Click)

  
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
        </div>

    </nav>
    </>
  )
}

export default Navbar