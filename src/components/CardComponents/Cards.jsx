import data from "../../../data.json";
import CardImageBox from "./CardImageBox";

export default function Cards() {
  return (
    <ul>
      {data.roomInfo.map((item) => (
        <li className="card" key={item.id}>
          <img src={item.imageUrl} alt={item.title} />
          <div className="txt">
            <h3 className="title">{item.title}</h3>
            <p className="host">{item.host}</p>
            <span className="price">{item.pricePerDay}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
