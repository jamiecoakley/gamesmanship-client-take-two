import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import "./Authorize.css";
import Create from './Create';
import Login from './Login';

const Authorize = (props) => {
    const [showLogin, setShowLogIn] = useState('hide');
    const [showCreate, setShowCreate] = useState('hide');
    const [showButton, setShowButton] = useState('show');

    function displayLogin() {
        return showLogin === 'show' ?
        (<Login updateToken={props.updateToken} />)
        : (<div></div>);
    }

    function displayCreate() {
        return showCreate === 'show' ?
        (<Create updateToken={props.updateToken} />)
        : (<div></div>);
    }

    function displayButton() {
        return(
            <>
            <Button variant="contained" size="large" color="primary" id="createLogButton" onClick={() => {setShowCreate('show'); setShowButton('hide')}}>Create Game Log</Button>
            <Button variant="contained" size="large" color="primary" id="accessLogButton" onClick={() => {setShowLogIn('show'); setShowButton('hide')}}>Access Your Game Log</Button> 
            </>
        );
    }

    return(
        <div id="auth">

            <h1 id="authTitle">GAMESMANSHIP</h1>
            <h3 id="authTag">Finishing the game backlog by any means necessary! ...Eventually.</h3>
            <div id="authDiv">
                {showButton === 'show' ? (displayButton())
                :(
                    <div id="authDiv2">
                        {" "}
                        {displayLogin()} {displayCreate()} {" "}
                    </div>
                )}
            </div>

            <p id="authFooter">Jamie Coakley © 2020</p>
        </div>
    );
};

export default Authorize;