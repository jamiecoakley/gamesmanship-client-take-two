import React, {useState} from 'react';
import {Form, Input, Label, FormGroup, Button} from 'reactstrap'
import APIURL from '../helpers/environment';
import "./Authorize.css";

const Create = (props) => {
    const [gamername, setGamername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}gamer/create`, {
            method: "POST",
            body: JSON.stringify({gamer: {gamername: gamername, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then(
            (response) => response.json()
        ) .then((data) => {
            props.updateToken(data.sessionToken);
        })
    }

    return(
        <div id="createGameLogForm">
            <h1 id="createH">CREATE YOUR GAME LOG</h1>
            <Form onSubmit={handleSubmit} className="createForm">
                <FormGroup id="createGamername">
                    <Input name="gamername"  value={gamername} onChange={(e) => setGamername(e.target.value)} placeholder="CHOOSE YOUR GAMERNAME WISELY"/>
                </FormGroup>
                <FormGroup id="createPassword">
                    <Input name="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="CHOOSE YOUR PASSWORD" />
                </FormGroup>
                <Button type="submit" block className="createButton">CREATE</Button>
            </Form>
        </div>
    )
}

export default Create;