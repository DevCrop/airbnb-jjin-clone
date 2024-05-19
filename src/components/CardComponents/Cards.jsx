import data from "../../../data.json";
import CardImageBox from "./CardImageBox";

export default function Cards() {
  return (
    <div className="card">
      <ul className="card-wrap">
        {data.roomInfo.map((item) => (
          <li className="card-item" key={item.id}>
            <CardImageBox />
            <div className="txt">
              <h3 className="title">{item.title}</h3>
              <div className="host">
                <p> host : {item.host}</p>
              </div>
              <span className="price">{item.pricePerDay}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
