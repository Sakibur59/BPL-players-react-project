import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedPlayer = ({ selectedPlayer }) => {
  console.log(selectedPlayer);
  return (
    <div>
        <div className="space-y-4">
      {selectedPlayer.map((player, index) => {
        return <div key={index} className="flex items-center justify-between gap-3 rounded-2xl border p-4">
          <div className="flex items-center gap-6" >
            <img src={player.player_img} alt={player.img_alt}  className="h-20.75 w-auto rounded-md"/>
          <div>
            <h2 className="flex items-center gap-2 font-semibold text-xl"><FaUser></FaUser> {player.player_name}</h2>
            <p>{player.player_type}</p>
          </div>
          </div>
          <button className="btn text-red-500">
            <MdDelete></MdDelete>
          </button>
        </div>;
      })}
    </div>
    </div>
  );
};

export default SelectedPlayer;
