import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CubeComponent from "./components/CubeComponent";
import "./styles.css";

export default function App() {
  const cubeSize = {
    wdt: "200px",
    ht: "200px"
  };
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CubeComponent Style={cubeSize} />}></Route>
      </Routes>
    </div>
  );
}
