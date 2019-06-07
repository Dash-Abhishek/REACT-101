import React from 'react'
import {Link} from 'react-router-dom'

const Header = (prop) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" >Mern</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/store" className="nav-link" >Store</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/poc" className="nav-link"> </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )


}

export default Header