import logo from "./logo.png";
import "./App.css";
import FamilyMembers from "./familyMembers/familyMembers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <FamilyMembers></FamilyMembers>
    </div>
  );
}

export default App;
