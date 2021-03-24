import React from 'react'
import { Link } from 'react-router-dom'

const Headers = props => {
  return (
    <div>
      <div className='jumbotron text-center'>
        <h1>Empresa</h1>
        <p>Você em primeiro Lugar</p>
        <form>
          <div className='input-group'>
            <input type='email' className='form-control' size='50' placeholder='Email Address' required />
            <div className='input-group-btn'>
              <button type='button' className='btn btn-danger'>Inscreva-se</button>
            </div>
          </div>
        </form>
      </div>
      <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <Link className='navbar-brand' to='/'>Logo</Link>
          </div>
          <div className='collapse navbar-collapse' id='myNavbar'>
            <ul className='nav navbar-nav navbar-right'>
              <li><Link to='/' >Início</Link></li>
              <li><Link to='/services' >Serviços</Link></li>
              <li><Link to='/portfolio'>Portifólio</Link></li>
              <li><Link to='/prices'>Preços</Link></li>
              <li><Link to='/contact'>Contato</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Headers;