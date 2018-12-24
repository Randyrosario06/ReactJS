import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';

class Header extends Component {
  


  render() {
    return (
      <div >
        <header className="App-header">
        <ul>
           <li id="Rututiando"><Link to={'/'}>Rututiando</Link></li>
            <li className="Ambos"><Link to={'registrarse'}>Registrate!</Link></li>
            <li className="Ambos"><Link to={'/postear'}>Postea!</Link></li>
          </ul>
         
        </header>
        <div>
        </div>
      </div>
    );
  }
}

export default Header;