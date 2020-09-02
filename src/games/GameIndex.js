import React, {useState, useEffect} from 'react';
import {Button} from 'reactstrap';
import CreateEntry from './CreateEntry';
import ViewGames from './ViewGames'
import APIURL from '../helpers/environment'
import './home.css';

const GameIndex = (props) => {

    const [games, setGames] = useState([]);

    const fetchGames = () => {
        fetch(`${APIURL}entry/view`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': "application/json",
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((logData) => {
            setGames(logData)
        })
    }

    // const fetchMoreGames = () => {
    //     fetch(`${APIURL}entry/viewall`, {
    //         method: 'GET',
    //         headers: new Headers ({
    //             'Content-Type': "application/json",
    //             'Authorization': props.token
    //         })
    //     }).then((res) => res.json())
    //     .then((allData) => {
    //         setGames(allData)
    //         console.log(allData)
    //     })
    // }
    
    useEffect(() => {
        fetchGames();
    }, [])

        return(
            <div id="wrapper">
                <div id="welcomeHeaderDiv">                    <h1 id="welcomeHeader">WELCOME TO YOUR GAME LOG</h1>
                </div>                
                
                <div id="homepage">
                    <CreateEntry fetchGames={fetchGames} token={props.token} games={games} id="createEntryButton" />
                    {/* <Button id="viewAllButton" onClick={fetchMoreGames}>View All</Button> */}
                    <Button id="logOutButton" onClick={props.clearToken}>LOG OUT</Button>
                    <p id="copyright">GAMESMANSHIP by Jamie Coakley © 2020 </p>
                </div>

                <div id="viewDiv">
                    <ViewGames id="seeYourGames" games={games} updateOn={props.updateOn} fetchGames={fetchGames} token={props.token} />
                </div>
            </div>
        )
}

export default GameIndex;