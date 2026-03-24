import React, { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({playerPromise}) => {
    const playerData = use(playerPromise);
    
    return (
        <div className='max-w-300 mx-auto my-4'>

            <div className='flex justify-between gap-2 items-center mb-10'>
                
                    <h2 className='font-bold'>Available Players</h2>
                <div>
                    <button className='btn bg-[#E7FE29] rounded-r-none rounded-l-xl'>Available</button>
                    <button className='btn rounded-l-none rounded-r-xl'>selected(0)</button>
                </div>
                
            </div>
            <AvailablePlayers playerData={playerData}></AvailablePlayers>
        </div>
    );
};

export default Players;