import React, { Component } from 'react';
import './App.css';

import Header from './header';
import Landingpage from './landingpage';

class App extends Component {
  render() {
    return (
      <div id="sitewrapper">

        <Header />
        <Landingpage />

      </div>
    );
  }
}

export default App;
