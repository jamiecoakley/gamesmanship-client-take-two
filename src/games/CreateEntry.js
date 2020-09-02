import React, {useState} from 'react';
import {Form, Button, Input, FormGroup, Modal, ModalBody, ModalHeader, InputGroupAddon, InputGroupText} from 'reactstrap'
import APIURL from '../helpers/environment';
import "./forms.css"

const CreateEntry = (props) => {
    const [title, setTitle] = useState('');
    const [hours, setHours] = useState('');
    const [date, setDate] = useState('');
    const [score, setScore] = useState('');
    const [platform, setPlatform] = useState('');
    const [review, setReview] = useState('');
    const [media, setMedia] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/entry/create`, {
            method: 'POST',
            body: JSON.stringify({game: {
                title: title, 
                hours: hours, 
                date: date, 
                score: score, 
                platform: platform, 
                review: review, 
                media: media}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((gameLogData) => {
            console.log(gameLogData);
            setTitle('');
            setHours('');
            setDate('');
            setScore('');
            setPlatform('');
            setReview('');
            setMedia('');
            props.fetchGames();
            setModal(false);
        })
    }

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return(
        <>
        <Button id="createEntryButton" color="blue" onClick={toggle}>LOG A GAME</Button>
        <Modal isOpen={modal} 
            toggle={toggle} 
            id="createEntryModal">
            <ModalHeader id="logFinishedGame">LOG A FINISHED GAME</ModalHeader>
            <ModalBody id="entryFormBody">
            <Form onSubmit={handleSubmit} className="createEntryForm">
                <FormGroup id="titleInput" >
                    <Input name="title" 
                    value={title} 
                    onChange={(e) =>setTitle(e.target.value)}
                    placeholder="TTILE" 
                    />
                </FormGroup>
                
                <FormGroup id="hoursPlayedInput">
                    <Input name="hours" 
                    value={hours} 
                    onChange={(e) =>setHours(e.target.value)}
                    placeholder="HOURS PLAYED"/>
                </FormGroup>
                
                <FormGroup id="dateInput">
                    <Input name="date" 
                    value={date} 
                    type="date" 
                    onChange={(e) =>setDate(e.target.value)}
                    placeholder="DATE COMPLETED"/>
                </FormGroup>
                
                <FormGroup id="scoreInput">
                    <Input name="score" 
                    value={score} 
                    onChange={(e) =>setScore(e.target.value)}
                    placeholder="SCORE" />
                    <InputGroupAddon addonType="append">
                        <InputGroupText>/ 100</InputGroupText>
                    </InputGroupAddon>
                </FormGroup>
                
                <FormGroup id="platformInput">
                    <Input name="platform" 
                    value={platform} 
                    type="select" 
                    onChange={(e) =>setPlatform(e.target.value)}>
                        <option>SELECT PLATFORM</option>
                        <option value="PC">PC</option>
                        <option value="XBOX">XBOX One</option>
                        <option value="PS4">PlayStation 4</option>
                        <option value="Other">Other</option>
                    </Input>
                </FormGroup>
                
                <FormGroup id="reviewInput">
                    <Input name="review" 
                    value={review} 
                    onChange={(e) =>setReview(e.target.value)}
                    placeholder="REVIEW"/>
                </FormGroup>
                
                <FormGroup id="mediaInput">
                    <Input name="media" 
                    value={media} onChange={(e) =>setMedia(e.target.value)} placeholder="MEDIA URL" />               
                </FormGroup>
               
                <Button type="submit" id="submitGameEntryButton">REMOVE FROM MY BACKLOG!</Button>
            
            </Form>
            </ModalBody>
            </Modal>
            </>
    )
}

export default CreateEntry;