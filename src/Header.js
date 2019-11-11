import React from 'react'
import { NavLink }  from 'react-router-dom'

const Header = () => {
    return (
        <div className = "header">
            <div className = "header-row">
                <NavLink className ='header-link' exact = {true} to = '/' activeClassName = 'current-page'>Home</NavLink>
                <NavLink className = 'header-link' exact = {true} to = '/about' activeClassName = 'current-page'>About</NavLink>
            </div>
        </div>
    )
}
export default Header