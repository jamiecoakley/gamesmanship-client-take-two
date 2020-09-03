import React, {useState} from 'react';
import {Card, CardBody, Button, Collapse, CardImg} from 'reactstrap';
import EditEntry from '../games/EditEntry';
import APIURL from '../helpers/environment';
import './home.css';

const GameCard = (props) => {
    const {game}=props

    const deleteGame = (game) => {
        fetch(`${APIURL}entry/delete/${game.id}`, {
            method: "DELETE",
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(() => props.fetchGames())
        }
    
    const [updateActive, setUpdateActive] = useState(false);

    const updateOff = () => {
        setUpdateActive(false);
    }

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return ( <div>
        <Button size="lg" block onClick={toggle}  className="titleCollapse" id="seeYourGames" ><span id="gameTitleP">{game.title}</span> <span id="arrowCollapse"> ⯆ </span></Button>
                    <Collapse isOpen={isOpen}>
                        <Card>
                            <CardBody className="gameViewCard">
                                <p id="scoreHoursP"><span>SCORE: {game.score}</span> <span>PLATFORM: {game.platform}</span>
                                <span>HOURS PLAYED: {game.hours}</span> <span>DATE COMPLETED: {game.date}</span></p>
                                <p>REVIEW: {game.review}</p>
                                <CardImg src={game.media} top width="50%" height="auto" alt="image goes here"/>
                    <div>
                    <br />
                    <div id="editDeleteDiv">     
                   {updateActive ? <EditEntry updateOff={updateOff} submitEdit={props.submitEdit} token={props.token} fetchGames={props.fetchGames} gameLogEdit={game} /> : <> </>}
                   <Button color="danger" id="editEntryButton" onClick={() => {setUpdateActive(true)}}>EDIT ENTRY</Button> {" "}
                    <Button color="danger" id="deleteEntryButton" onClick={() => {deleteGame(game)}}>DELETE ENTRY</Button>
                    </div>
                    </div>
                    </CardBody>
                </Card>
                </Collapse>
                <br />
    </div> );
}
 
export default GameCard;