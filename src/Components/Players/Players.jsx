import React, { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const Players = ({ playerPromise,setCoin,coin }) => {
  const playerData = use(playerPromise);
  const [selectedType, setSelectedType] = useState("available");
  const [selectedPlayer,setSelectedPlayer]=useState([])

  return (
    <div className="max-w-300 mx-auto my-4">
      <div className="flex justify-between gap-2 items-center mb-10">
        {selectedType === "available" ? (
          <h2 className="font-bold">Available Players</h2>
        ) : (
          <h2 className="font-bold">Selected Player ({selectedPlayer.length}/{playerData.length})</h2>
        )}
        <div>
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}
          >
            selected({selectedPlayer.length})
          </button>
        </div>
      </div>
      {
        selectedType === "available" ? <AvailablePlayers playerData={playerData} setCoin={setCoin} coin={coin} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}></AvailablePlayers> : <SelectedPlayer selectedPlayer={selectedPlayer}setSelectedPlayer={setSelectedPlayer}></SelectedPlayer>
      }
    </div>
  );
};

export default Players;
