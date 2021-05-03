import React from 'react'
import './Nav.css'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';



function Nav() {



    return (
        <nav className="nav">
            <h1 className="nav__title">only<span>Devs</span></h1>
            <ul className="nav__pages">
                <div className="nav__link">
                    <PeopleOutlineIcon className="groups" style={{ fontSize: "20px" }} />
                    <h2>Groups</h2>
                </div>
                <div className="nav__link">
                    <MailOutlineIcon className="inbox" style={{ fontSize: "20px" }} />
                    <h2>Inbox</h2>
                </div>
                <div className="nav__link">
                    <ChatBubbleOutlineIcon className="posts" style={{ fontSize: "20px" }} />
                    <h2>Posts</h2>
                </div>
                <div className="nav__link">
                    <HelpOutlineIcon className="help" style={{ fontSize: "20px" }} />
                    <h2>Help</h2>
                </div>
                
            </ul>

            <ul className="nav__sm__pages">
                <div className="nav__link__sm">
                    <FacebookIcon className="sm" style={{ fontSize: "20px", color: "blue" }} />
                    <h2>Facebook</h2>
                </div>
                <div className="nav__link__sm">
                    <InstagramIcon className="sm" style={{ fontSize: "20px", color: "rgb(214, 91, 188)" }} />
                    <h2>Instagram</h2>
                </div>
                <div className="nav__link__sm">
                    <TwitterIcon className="sm" style={{ fontSize: "20px", color: "aqua" }} />
                    <h2>Twitter</h2>
                </div>
                
            </ul>




            <p>© uur.is ( )</p>

        </nav>
    )
}

export default Nav
