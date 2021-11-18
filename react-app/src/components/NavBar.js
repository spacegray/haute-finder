
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import logo from '../images/haute-logo-bold.png'

const NavBar = () => {
  return (
    <>
      <div className='nav-left'>
          <NavLink to='/' exact={true} activeClassName='active'>
            <img className="HauteFinder-logo"src={logo} style={{position: 'absolute',marginLeft: '10px', height: '100px', maxHeight:'100%', maxWidth:'100%'}}></img>
          </NavLink>
        </div>
      <nav style={{backgroundColor: '#F0F0F0', height: '110px', width:'100%', display: 'flex', margin: '0 auto'}}>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active' style={{display: 'flex', color: '#763B2D', decoration: 'none', justifyContent:'flex-end'}}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
    </nav>
     </>
  );
}

export default NavBar;
