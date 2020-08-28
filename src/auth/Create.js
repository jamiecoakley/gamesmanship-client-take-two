import React, {useState, Form, Input, Label, FormGroup, Button} from 'react';
import APIURL from '../helpers/environment';
import "./Authorize.css";

const Create = (props) => {
    const [gamername, setGamername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/gamer/create`, {
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
        <div>
            <h1>CREATE A GAME LOG</h1>
            <Form onSubmit={handleSubmit} className="createForm">
                <FormGroup>
                    <Label htmlFor="gamername">GAMERNAME</Label>
                    <Input name="gamername" value={gamername} onChange={(e) => setGamername(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">PASSWORD</Label>
                    <Input name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormGroup>
                <Button type="submit" className="createButton">CREATE</Button>
            </Form>
        </div>
    )
}

export default Create;