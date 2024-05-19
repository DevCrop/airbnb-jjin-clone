import Cards from "./components/CardComponents/Cards";
import HeaderNav from "./components/HeaderNav";
import data from "../data.json";
import Grid from "./components/Grid";

function App() {
  return (
    <>
      <HeaderNav />
      <div className="container">
        <Grid />
      </div>
    </>
  );
}

export default App;
