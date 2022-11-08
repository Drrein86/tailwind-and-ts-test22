import { Person } from "./Components/Objects";
import { Country } from "./Components/interfaces";
//sdsd
function App() {
  return (
    <div className={"App"}>
      <div className={"card"}>sdsd</div>
      <p>sdasdasdas sssasdassssdasd</p>
      <Person
        name="big bag"
        email="ssss@sadas.com"
        age={24}
        isMarried={true}
        friends={["jake", "ido", "moshe"]}
        country={Country.island}
      />
    </div>
  );
}

export default App;
