import data from "../../data.json";
import Cards from "./CardComponents/Cards";

const Grid = () => {
  console.log(data.roomInfo);
  return (
    <div className="grid">
      <Cards />
    </div>
  );
};

export default Grid;
