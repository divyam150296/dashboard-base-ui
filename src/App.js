import logo from "./logo.svg";
import "./App.css";
import "./styles.scss";
import RightPart from "~/component/RightPart.js";
import LeftPart from "~/component/LeftPart.js";

function App() {
  return (
    <div className="grid-row">
      <LeftPart>Hello</LeftPart>
      <RightPart>Hi</RightPart>
    </div>
  );
}

export default App;
