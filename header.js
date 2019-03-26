import React, { Component } from 'react';

import scubaHero from 'img/scuba2.jpg';

class Header extends Component{
    render(){
        return(

            <div id="scubaHero">
            <img src={scubaHero} alt="Scubadiver" />
        </div>
        )
    }
}