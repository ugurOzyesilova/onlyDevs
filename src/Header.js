import React from 'react'
import './Header.css'
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from './Context'

function Header() {
    const [{ user }] = useStateValue();

    return (
        <div className ="header">
            <nav className ="header__nav">
                <div className="header__nav__search">
                    <input className="search" placeholder="Search for people, jobs, companies and more..."/>
                    <SearchIcon className="search__icon" style={{ fontSize: "28px", color: "orange"}} />
                </div>
                <Avatar src={user.photoURL} className="me" style={{marginRight : "30px"}}/>
            </nav>
        </div>
    )
}

export default Header
