import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Footers from './components/Footers'
import Headers from './components/Headers'
import Start from './components/Start'
import Services from './components/Services'
import Portifolio from './components/Portifolio'
import Prices from './components/Prices'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" >
          <Headers />

          <Route path='/' exact Component={Start} />
          <Route path='/services' Component={Services} />
          <Route path='/portifolio' Component={Portifolio} />
          <Route path='/prices' Component={Prices} />
          <Route path='/contact' Component={Contact} />


          <Footers />
        </div >
      </BrowserRouter>
    );
  }
}

export default App;
