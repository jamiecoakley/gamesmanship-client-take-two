import React, {useState} from 'react';
import {Form, Button, Input, FormGroup, Modal, ModalHeader, ModalBody, InputGroupText, InputGroupAddon} from 'reactstrap';
import APIURL from '../helpers/environment';

const EditEntry = (props) => {
    const [editTitle, setEditTitle] = useState(props.gameLogEdit.title);
    const [editHours, setEditHours] = useState(props.gameLogEdit.hours);
    const [editDate, setEditDate] = useState(props.gameLogEdit.date);
    const [editScore, setEditScore] = useState(props.gameLogEdit.score);
    const [editPlatform, setEditPlatform] = useState(props.gameLogEdit.platform);
    const [editReview, setEditReview] = useState(props.gameLogEdit.review);
    const [editMedia, setEditMedia] = useState(props.gameLogEdit.media);

    const submitEdit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/entry/edit/${props.gameLogEdit.id}`, {
            method: 'PUT',
            body: JSON.stringify({game: {title: editTitle, hours: editHours, date: editDate, score: editScore, platform: editPlatform, review: editReview, media: editMedia}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => {
            props.fetchGames();
            props.updateOff();
            })
    }

    return(
        <>
        <Modal isOpen={true} id="editEntryModal">
            <ModalHeader id="editFinishedGame">EDIT GAME ENTRY</ModalHeader>
            <ModalBody id=
            "editEntryFormBody">
            <Form onSubmit={submitEdit} className="editEntryForm">
                <FormGroup >
                    <Input name="editTitle" value={editTitle} onChange={(e) =>setEditTitle(e.target.value)} placeholder="EDIT TTILE" id="editTitleInput"/>
                </FormGroup>
                
                <FormGroup id="editHoursPlayedInput">
                    <Input name="editHours" value={editHours} onChange={(e) =>setEditHours(e.target.value)} placeholder="EDIT HOURS PLAYED"/>
                </FormGroup>
                
                <FormGroup id="editDateInput">
                    <Input name="editDate" value={editDate} type="date" onChange={(e) =>setEditDate(e.target.value)} placeholder="EDIT DATE COMPLETED"/>
                </FormGroup>
                
                <FormGroup id="editScoreInput">
                    <Input name="editScore" value={editScore} onChange={(e) =>setEditScore(e.target.value)} placeholder="EDIT SCORE" />
                    <InputGroupAddon addonType="append">
                        <InputGroupText>/ 100</InputGroupText>
                    </InputGroupAddon>
                </FormGroup>
                
                <FormGroup id="editPlatformInput">
                    <Input name="editPlatform" value={editPlatform} type="select" onChange={(e) =>setEditPlatform(e.target.value)}>
                        <option>EDIT PLATFORM</option>
                        <option value="PC">PC</option>
                        <option value="XBOX">XBOX One</option>
                        <option value="PS4">PlayStation 4</option>
                        <option value="Other">Other</option>
                    </Input>
                </FormGroup>
                
                <FormGroup id="setReviewInput">
                    <Input name="editReview" value={editReview} onChange={(e) =>setEditReview(e.target.value)} placeholder="EDIT REVIEW"/>
                </FormGroup>
                
                <FormGroup id="editMediaInput">
                    <Input name="editMedia" value={editMedia} onChange={(e) =>setEditMedia(e.target.value)} placeholder="EDIT MEDIA URL"/>               
                </FormGroup>
               
                <Button type="submit" id="editGameEntryButton">SUBMIT ENTRY EDIT!</Button>
            
            </Form>
            </ModalBody>
            </Modal>
            </>
    )
}

export default EditEntry;