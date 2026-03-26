
import { FaFlag, FaIcons, FaUser } from "react-icons/fa";
import Card from "../ui/Card";

const AvailablePlayers = ({ playerData,setCoin,coin,selectedPlayer,setSelectedPlayer }) => {

  return (
      <div className="max-w-300 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {playerData.map((player) => {
            return <Card key={player.id} player={player} setCoin={setCoin} coin={coin} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}></Card>
          })}
        </div>
      </div>
    );
};

export default AvailablePlayers;
