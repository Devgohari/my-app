import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(variable) {

    return (
<nav className={`navbar navbar-expand-lg navbar-${variable.mode} bg-${variable.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href='www.google.com'>{variable.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about'>About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href='www.google.com' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href='www.google.com'>Action</a></li>
            <li><a className="dropdown-item" href='www.google.com'>Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href='www.google.com'>{variable.elsehere}</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href='www.google.com' tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <div className={`mx-2 form-check form-switch text-${variable.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={variable.toggleMode} type="checkbox" id="flexSwitchCheckChecked"/>
      <label className="form-check-label"  HTMLfor="flexSwitchCheckChecked">Enable Dark Mode</label>
      </div>
      <div className="form-check form-switch mx-2">
  <input className="form-check-input" onClick={variable.redTheme} type="checkbox" id="flexSwitchCheckChecked"/>
  <label className="form-check-label"  HTMLfor="flexSwitchCheckChecked">Red Theme</label>
</div>
<div className="form-check form-switch mx-2">
  <input className="form-check-input" onClick={variable.greenTheme} type="checkbox" id="flexSwitchCheckChecked"/>
  <label className="form-check-label" HTMLfor="flexSwitchCheckChecked">Green Theme</label>
</div>
    </div>
  </div>
</nav>
    )
}
Navbar.prototype= {title: PropTypes.string}
Navbar.defaultProps = {
    elsehere :'This si else here'
}
