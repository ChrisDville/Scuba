import React, { Component } from 'react';

import './landingpage.scss';




class Landingpage extends Component{
    render(){
        return(

        <section className="landingPage">

            <div id="landingPageGrid">
        
            <div className="scubaHero"></div>

            <div id="scuba-text-box">
                
                <div id="scuba-text-center">
                    <h1>The best way to observe a fish is to become a fish.</h1>
                    <p>Jacques Cousteau</p>
                    
                </div>
            
            </div>
    
            </div>
        </section>
        )
    }
}

export default Landingpage;

