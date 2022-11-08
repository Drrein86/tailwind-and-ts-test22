import { Person } from "./Components/Objects";
import { Country } from "./Components/interfaces";
//sdsd
function App() {
  return (
    <div className={"App"}>
      <div className={"card"}></div>
      <img src="images\user.png" />
      <div className="person">
        <Person
          name="big bag"
          email="ssss@sadas.com"
          age={24}
          isMarried={true}
          friends={["jake", "ido", "moshe"]}
          country={Country.island}
        />
      </div>
      <div className={"buttons"}>
        <a href="#" className={"button AFbutton"}>
          Add friddend
        </a>
        <a href="#" className={"button MSGbutton"}>
          Message
        </a>
      </div>
    </div>
  );
}

export default App;
