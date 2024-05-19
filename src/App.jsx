import Cards from "./components/Cards";
import HeaderNav from "./components/HeaderNav";
import data from "../data.json"


function App() {


  return (
    <>
     <HeaderNav/>
     {data.roomInfo.map((d) => (
          <Cards key={d.roomId} data={d} />
        ))}
    </>
  )
}

export default App
