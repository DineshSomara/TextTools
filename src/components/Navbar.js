import React from 'react'
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
  <>
    <nav className={`navbar navbar-expand-lg p-3 navbar-${props.mode} bg-${props.mode}`}>
      <Link className="navbar-brand" to="/">{props.dinesh}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>

        {/* <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={() => {props.toggleMode('primary')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
            <div className="bg-danger rounded mx-2" onClick={() => {props.toggleMode('danger')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
            <div className="bg-success rounded mx-2" onClick={() => {props.toggleMode('success')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
            <div className="bg-warning rounded mx-2" onClick={() => {props.toggleMode('warning')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
        </div> */}


        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light' }`}>
          <input className="form-check-input" onClick={() => {props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault" aria-checked/>
          <label className="form-check-label mr-4" htmlFor="flexSwitchCheckDefault">Change Mode</label>
        </div>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
          <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>

    </nav>
  </>
  )
}

Navbar.propTypes = {
  dinesh : propTypes.string.isRequired,
}

Navbar.defaultProps =  {
  dinesh: 'Set title here',
}