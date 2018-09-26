import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Search from '../search'
// import Home from '../home'
import '../index.scss'

class Header extends Component {
  render() {
    return (
      <div>
        <ul className="nav">
          <li className="navLi"><Link to="/">Home</Link></li>
          <li className="navLi"><Link to="/search">Search</Link></li>
        </ul>
      </div>
    )
  }
}

export default Header
