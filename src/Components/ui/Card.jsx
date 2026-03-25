import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const Card = ({ player}) => {
  const [IsSelected, setIsSelected] = useState(false);
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
          <button className="btn" onClick={() => setIsSelected(true)}>
            {IsSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
