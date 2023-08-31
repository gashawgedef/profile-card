import logo from "./logo.svg";
import "./App.css";
import Avatar from "./Avatar";
import Skillset from "./Skillset";
import Intro from "./Intro";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <Skillset />
      </div>
    </div>
  );
}

export default App;
