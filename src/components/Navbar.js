import React from 'react';
import { Link } from "react-router-dom";
import _ from "lodash";

// things to do
// 1. make search input take its seperate row in sm size 
// 2. make from and to dropdown scrollable 

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg bg-${props.theme} navbar-${props.theme} sticky-sm-top`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">{props.link1}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/sports">Sports</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More Categories
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link></li>
                <li><Link className="nav-link" aria-current="page" to="/health">Health</Link></li>
                <li><Link className="nav-link" aria-current="page" to="/science">Science</Link></li>
                <li><Link className="nav-link" aria-current="page" to="/technology">Technology</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Country
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li className='nav-link' onClick={()=>{props.updateCountry('in')}}>India</li>
                <li className='nav-link' onClick={()=>{props.updateCountry('ar')}}>Ar</li>
                <li className='nav-link' onClick={()=>{props.updateCountry('de')}}>Denmark</li>
                <li className='nav-link' onClick={()=>{props.updateCountry('en')}}>England</li>
                <li className='nav-link' onClick={()=>{props.updateCountry('es')}}>Es</li>
                <li className='nav-link' onClick={()=>{props.updateCountry('fr')}}>France</li>
                <li className='nav-link' onClick={()=>{props.updateCountry('he')}}>He</li>
                <li className='nav-link' onClick={()=>{props.updateCountry('it')}}>Italy</li>
                <li className='nav-link' onClick={()=>{props.updateCountry('nl')}}>NetherLand</li>
                <li className='nav-link' onClick={()=>{props.updateCountry('no')}}>Norway</li>
                <li className='nav-link' onClick={()=>{props.updateCountry('pt')}}>Portugal</li>
                <li className='nav-link' onClick={()=>{props.updateCountry('ru')}}>Russia</li>
                <li className='nav-link' onClick={()=>{props.updateCountry('sv')}}>Sv</li>
                <li className='nav-link' onClick={()=>{props.updateCountry('ud')}}>UD</li>
                <li className='nav-link' onClick={()=>{props.updateCountry('zh')}}>Zh</li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2"
              type="search" placeholder="Search"
              onChange={(e) => { props.updateQuerry(e.target.value) }}
              aria-label="Search" />
            <div className="dropdown me-2">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                From
              </button>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" style={{ minWidth: '1rem' }}>
                {_.times(31, (i) => (
                  <li className="dropdown-item" key={i} onClick={() => { props.updateDateFrom(i + 1) }}>{i + 1}</li>
                ))}
              </ul>
            </div>
            <div className="dropdown me-2">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                To
              </button>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" style={{ minWidth: '1rem' }}>
                {_.times(31, (i) => (
                  <li className="dropdown-item" key={i} onClick={() => { props.updateDateTo(i + 1) }}>{i + 1}</li>
                ))}
              </ul>
            </div>
            <Link className="btn btn-outline-success me-2" to="/search" role="search">Search</Link>
          </form>
        </div>
      </div>
    </nav>
  )
}