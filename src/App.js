import React, { Component } from 'react';

import Site from './site'
import Footers from './components/Footers'
import Headers from './components/Headers'
import Start from './components/Start'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Headers />
        <Start />
        <Site />
        <Footers />
      </div >
    );
  }
}

export default App;
