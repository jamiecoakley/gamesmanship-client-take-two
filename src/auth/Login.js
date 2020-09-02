import React, {useState } from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'
import APIURL from '../helpers/environment';
import "./Authorize.css";

const Login = (props) => {
    const [gamername, setGamername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/gamer/login`, {
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
        <div id="accessYourLog">
            <h1 id="loginT">ACCESS YOUR GAME LOG</h1>
            <Form onSubmit={handleSubmit} id="loginForm">
                <FormGroup id="loginGamername"> 
                    <Input name="gamername" value={gamername} onChange={(e) => setGamername(e.target.value)} placeholder="ENTER YOUR GAMERNAME"/>
                </FormGroup>
                <FormGroup id="loginPassword">
                    <Input name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="ENTER YOUR PASSWORD" />
                </FormGroup>
                <Button type="submit" className="loginButton">LOG IN</Button>
            </Form>
        </div>
    )
}

export default Login;