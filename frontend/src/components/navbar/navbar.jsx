import React from 'react';
import logo from '../../assets/images/logo.png'

import { Link, withRouter } from 'react-router-dom';

const NavBar = () => {
 return( // concvert to ul
    <nav className='default-navbar'>
      <div className='boxed'>
        <Link to={'/'} className="navbar-brand">
          <img src={logo} width="30" height="30" alt=""/>
        </Link>
      </div>
      <ul className='nav-pages'> 
        <li className='nav-tab'>
          <Link to={'/favorites'}><h6 >Favorites</h6></Link>
        </li>
      </ul>
      <div className='boxed'> login area/ profile</div>

    </nav>
    

  )
}

export default withRouter(NavBar)
