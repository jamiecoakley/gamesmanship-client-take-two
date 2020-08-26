import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import APIURL from '../helpers/environment';

// import {
//     fade,
//     ThemeProvider,
//     withStyles,
//     makeStyles,
//     createMuiTheme,
//   } from '@material-ui/core/styles';
// import InputBase from '@material-ui/core/InputBase';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
//import { green, purple } from '@material-ui/core/colors';

const Login = (props) => {
    const [gamername, setGamername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}:3000/gamer/login`, {
            method: "POST",
            body: JSON.stringify({gamer: {gamername: gamername, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }) .then(
            (response) => response.json()
        ) .then((data) => {
            props.updateToken(data.sessionToken);
        })
    }

    return(
        <div>
            <h1>ACCESS YOUR GAME LOG</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <TextField
                    className="login-gamername"
                    label="GAMERNAME"
                    required
                    variant="outlined"
                    id="gamernameInput"
                    onChange={(e) => setGamername(e.target.value)}
                />

                <TextField
                    className="login-password"
                    label="PASSWORD"
                    required
                    variant="outlined"
                    id="validation-outlined-input"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button type="submit">LOG IN</Button>
            </form>
        </div>
    )
}

export default Login;