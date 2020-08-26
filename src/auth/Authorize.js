import React, {useState} from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./Authorize.css";
import backgroundVid from "../images/videoplayback_Trim.mp4";
import Create from './Create';
import Login from './Login';



const Authorize = (props) => {
    const [showLogIn, setShowLogIn] = useState('hide');
    const [showCreate, setShowCreate] = useState('hide');
    return(
        <div id="authorize">
            <video autoPlay loop muted id="backgroundVid"
                style={{
                    position: "absolute",
                    width: "100%",
                    height: '100%',
                    objectFit: "cover"
                }}>
               <source src={backgroundVid} type="video/mp4" />
            </video>
            <h1 id="authTitle">GAMESMANSHIP</h1>
            <h3 id="authTag">Finishing the game backlog by any means necessary! ...Eventually.</h3>
            
            {showCreate === "show" ? <Create updateToken={props.updateToken} /> : <>
            <Button variant="contained" size="large" color="primary" id="createLog" onClick={() => {setShowCreate('show')}}>Create Game Log</Button> </>}

            {showLogIn === "show" ? <Login updateToken={props.updateToken} /> : <>
            <Button variant="contained" size="large" color="primary" id="accessLog" onClick={() => {setShowLogIn('show')}}>Access Your Game Log</Button> </>}

            <p id="authFooter">Jamie Coakley © 2020</p>
        </div>
    )
}

export default Authorize;