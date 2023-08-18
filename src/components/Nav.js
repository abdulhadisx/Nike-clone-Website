import React from 'react'
import "./Nav.css"

const Nav = () => {
    return (
        <nav>

            <div className='containar'>
                <img src="/images/brand_logo.png" alt="logo" />
                <ul>
                    <li>Home </li>
                    <li>About </li>
                    <li>Contact Us </li>
                    <li>Location </li>
                </ul>  <button className='btn btn-primary'>Login</button>

            </div>

        </nav>

    )
}

export default Nav
