import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import APIURL from '../helpers/environment';

const Create = (props) => {
    const [gamername, setGamername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/gamer/create`, {
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
            <h1>CREATE A GAME LOG</h1>
            <form onSubmit={handleSubmit} className="create-form">
                <TextField
                    className="create-gamername"
                    label="GAMERNAME"
                    required
                    variant="outlined"
                    id="gamernameInput"
                    onChange={(e) => setGamername(e.target.value)}
                />

                <TextField
                    className="create-password"
                    label="PASSWORD"
                    required
                    variant="outlined"
                    id="validation-outlined-input"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button type="submit">CREATE</Button>
            </form>
        </div>
    )
}

export default Create;