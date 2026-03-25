
import { FaFlag, FaIcons, FaUser } from "react-icons/fa";
import Card from "../ui/Card";

const AvailablePlayers = ({ playerData }) => {

  return (
      <div className="max-w-300 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {playerData.map((player) => {
            return <Card player={player}></Card>
          })}
        </div>
      </div>
    );
};

export default AvailablePlayers;
