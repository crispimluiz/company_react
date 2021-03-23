import React, { Component } from 'react';

import Site from './site'
import Footers from './components/Footers'
import Headers from './components/Headers'
import Start from './components/Start'
import Services from './components/Services'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Headers />
        <Start />
        <Services />
        <Site />
        <Footers />
      </div >
    );
  }
}

export default App;
