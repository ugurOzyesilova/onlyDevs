import React from 'react'
import './Login.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { auth, provider} from "./firebase"
import { actionTypes } from './reducer'
import { useStateValue } from './Context'


function Login() {

    const [{}, send] = useStateValue("")

    const logIn = () => {
        auth.signInWithPopup(provider)

        .then((result) => {
            send({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result.user);})

        .catch((error)=> {alert(error.message)})
    }

    return (
        <div className ="login">
            <h1 className="nav__title">only<span>Devs</span></h1>
            <button onClick = {logIn} className="login__button">Login with Google Account</button>
            <ul className="nav__sm__pages">
                <h1 className ="nav__sm__title">Fallow us on Social Media </h1>
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
                <p>© uur.is ( )</p>


            </ul>
        </div>
    )
}

export default Login
