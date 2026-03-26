import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const Card = ({ player,setCoin,coin,selectedPlayer,setSelectedPlayer}) => {
  const [IsSelected, setIsSelected] = useState(false);
  const handleChoosePlayer = () => {
    let newCoin = coin - player.price;
    if(newCoin >=0) {
       setCoin(coin - player.price);
    } else{
        alert(`Not enough coin to purchase player`);
        return;
    }

    alert(`${player.player_name} is selected`)
    setIsSelected(true);
    setSelectedPlayer([...selectedPlayer,player])
    
}
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
          <button className="btn" onClick={handleChoosePlayer} disabled={IsSelected=== true ? true : false}>
            {IsSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
