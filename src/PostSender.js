import React, {useState}from 'react'
import './PostSender.css'
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LinkIcon from '@material-ui/icons/Link';
import { useStateValue } from './Context'
import db from './firebase';
import firebase from "firebase"


function PostSender() {

    const [input, setInput] = useState ("")
    const [{ user }, send] = useStateValue();
    

    const handleSubmit = (e) => {   
        e.preventDefault();
        db.collection('posts').add({
            content: input,
            username: user.displayName,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL
            

        })

        setInput("");
    }


    return (
        <div className="postsender">
            <div className="postsender__infos">
                <div className="postsender__info">
                    <PhotoCameraOutlinedIcon className="photo" style={{ height: "40px", width: "40px" }} />
                    <h2>Upload a photo</h2>
                </div>
                <div className="postsender__info">
                    <ShareOutlinedIcon className="post" style={{ height: "40px", width: "40px" }}/>
                    <h2>Share a post</h2>
                </div>
                <div className="postsender__info">
                    <RateReviewOutlinedIcon className="update" style = {{height: "40px", width: "40px"}}/>
                    <h2>Share an update</h2>
                </div>
            </div>
            <textarea 
            value = {input}
            onChange = {(e) => setInput(e.target.value)}
            className="post__content" 
            placeholder ={`What's on your mind ${user.displayName}?`}/>
            <div className="postsender__link">
                <div className="postsender__icon">
                    <LinkIcon/>
                    <PhotoCameraOutlinedIcon/>
                </div>
                <button onClick = {handleSubmit} type="submit" className="post__button">POST <ArrowForwardIcon style={{ height: "15px", width: "15px", marginLeft: "10px" }} /> </button>
            </div>
        </div>
    )
}

export default PostSender
