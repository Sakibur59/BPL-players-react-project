import React from "react";
import { FaFlag, FaIcons, FaUser } from "react-icons/fa";

const AvailablePlayers = ({ playerData }) => {
  return (
    <div className="max-w-300 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {playerData.map((player) => {
          return (
            <div className="card bg-base-100 ">
              <figure>
                <img src={player.player_img} alt={player.img_alt} />
              </figure>
              <div className="card-body">
                <div>
                  <h2 className="card-title">
                    <FaUser /> {player.player_name}
                  </h2>
                </div>
                <div className="flex justify-between items-center ">
                  <div className="flex gap-2 items-center ">
                    <FaFlag></FaFlag>
                    <p>{player.player_country}</p>
                  </div>
                  <button className="btn">{player.player_type}</button>
                </div>
                <div className="divider"></div>
                <p className="font-bold">Rating: {player.rating}</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold">{player.batting_style}</p>
                  <p className="text-right">{player.bowling_style}</p>
                </div>
                <div className="card-actions justify-between items-center">
                  <p className="font-semibold">Price: ${player.price}</p>
                  <button className="btn">Choose Player</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;
