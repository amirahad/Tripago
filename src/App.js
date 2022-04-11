import "./App.css";
import Jokes from "./component/Jokes";
import TripList from "./component/TripList";

function App() {
  return (
    <div className="App">
      <TripList />
      <Jokes />
    </div>
  );
}

export default App;
