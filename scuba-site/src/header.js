import React, { Component } from 'react';

import './header.scss';

import Scubalogo from './gfx/ScubaLiving_logo_small.svg';
import LoginLogo from './gfx/lock-icon.png';

class Header extends Component{
    render(){
        return(

    <header>

        <nav>
            <div id="scuba-logo-small">
            <img src={Scubalogo} alt="Scubadiver" />
            </div>

        
            <ul id="navbar">
                <li><a href="#">Home</a></li>
                <li><a href="#">Dykkerudstyr</a></li>
                <li><a href="#">Dykkerrejser</a></li>
                <li><a href="#">Dykkerkurser</a></li>
                <li><a href="#">Kontakt</a></li>
                <li><a href="#">Om os</a></li>
            </ul>


            <form action="" id="searchBarHeader">
                <input type="search" id="searchInputHeader" />
                <button type="button" id="searchButtonHeader">SØG</button>
            </form>

            <div id="loginHeader">

                <div id="loginPic">
                <img src={LoginLogo} alt="Lock" />
            </div>
            
                <div id="loginLink">
                    <p>LOGIN</p>
                </div>
                
            </div>
        </nav>

    </header>
        )
    }
}

export default Header;