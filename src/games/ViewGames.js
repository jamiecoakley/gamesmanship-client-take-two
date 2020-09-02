import React from 'react';
import GameCard from '../games/GameCard';

const ViewGames = (props) => {

    const gameMapper = () => {
        return props.games.map((game, index) => {
            return(
                <div key={index}>
                    <GameCard game={game} {...props}/>
                </div>
            )
        })
    }
    return(
        <>
        {gameMapper()}
        </>
    )
}
export default ViewGames;