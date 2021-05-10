import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {ReactComponent as Logo} from '../assets/img/logo.svg'


export default function Header() {

    const location = useLocation()

    return (
        <nav id="header" className="nav" >
        
          <div className="center">

              <Logo className="nav_logo" />

              <ul className="nav_links">
                <li className={location.pathname === "/" ? "nav_link current" : "nav_link"}>
                  <Link to="/">home</Link>
                </li>
                <li className={location.pathname === "/register" ? "nav_link current" : "nav_link"}>
                  <Link to="/register">register</Link>
                </li>
                <li className={location.pathname === "/signin" ? "nav_link current" : "nav_link"}>
                  <Link to="signin">sign in</Link>
                </li>
              </ul>

          </div>

      </nav>
    )
}
