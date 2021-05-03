import React, {useState, useEffect} from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import db from "./firebase"
import { useStateValue } from './Context'


function Post({ profilePic, timestamp, content, username, comment }) {
    const [{ user }] = useStateValue();

    return (
    
        <div className="Post">

            <div className="Post__upper">
                <div className="Post__user__infos">
                    <Avatar src={profilePic} />
                    <h1 className="Post__username">{username}</h1>
                </div>

                <h1 className="Post__time">{new Date(timestamp?.toDate()).toUTCString()}</h1>
            </div>

            <div className="Post__middle">
                <p className="Post__content">{content}</p>
            </div>

            <button className="Post__reply"  >
                REPLY
                <ArrowForwardIosIcon style={{ height: "15px", width: "15px", marginLeft: "10px" }} />
            </button>
            <input placeholder ="Add a comment.." className="Post__comment"></input>

            <div className ="Post__comments">
                <Avatar src = {user.photoURL} style= {{marginRight: "10px"}}/>
                <h3>{user.displayName} : </h3>
                <span className="comment__content">This is a huge lie</span>
            </div>

        </div>
        
    )
}

export default Post
