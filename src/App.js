import React, { Component } from 'react';

import Site from './site'
import Footers from './components/Footers'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Site />
        <Footers />
      </div >
    );
  }
}

export default App;
