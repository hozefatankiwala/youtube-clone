import React, { useState } from 'react'
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import Avatar from '@material-ui/core/Avatar'
import { Link } from "react-router-dom"

function Header() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon className="header__icon" />
                <Link to="/"> <img className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt=""></img>
                </Link>
            </div>
            <div className="header__input">
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <img
                    className="header__avatar"
                    alt="hozefa tankiwala"
                    src="https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-19/s150x150/89600199_208043733887272_9125009563425177600_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_ohc=4kplS3fRYNoAX9iQkxk&tp=1&oh=5ddc4a649cefae4a338924e0b9f39370&oe=600142E8"
                />
            </div>
        </div >
    )
}

export default Header
