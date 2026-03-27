import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedPlayer = ({ selectedPlayer,setSelectedPlayer,setCoin,coin}) => {
  const handleDeleteSelectedPlayer= (player) => {
        const filterPlayers = selectedPlayer.filter(selected => selected.player_name !== player.player_name);
        setSelectedPlayer(filterPlayers);
        setCoin(coin + player.price);
  }
  return (
    <div>
        <div className="space-y-4">
      {selectedPlayer.length === 0 ? 
      <div className="flex justify-center items-center flex-col gap-2 h-100 border rounded-xl">
        <h2 className="font-bold text-2xl">No players Selected</h2>
        <p>Go to available tab to select players</p>
      </div>
      : selectedPlayer.map((player, index) => {
        return <div key={index} className="flex items-center justify-between gap-3 rounded-2xl border p-4">
          <div className="flex items-center gap-6" >
            <img src={player.player_img} alt={player.img_alt}  className="h-20.75 w-auto rounded-md"/>
          <div>
            <h2 className="flex items-center gap-2 font-semibold text-xl"><FaUser></FaUser> {player.player_name}</h2>
            <p>{player.player_type}</p>
          </div>
          </div>
          <button className="btn text-red-500" onClick={()=>handleDeleteSelectedPlayer(player)}>
            <MdDelete></MdDelete>
          </button>
        </div>;
      })}
    </div>
    </div>
  );
};

export default SelectedPlayer;
