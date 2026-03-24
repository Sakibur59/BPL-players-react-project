import React, { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({playerPromise}) => {
    const playerData = use(playerPromise);
    
    return (
        <div className='max-w-[300] mx-auto'>
            <AvailablePlayers playerData={playerData}></AvailablePlayers>
        </div>
    );
};

export default Players;