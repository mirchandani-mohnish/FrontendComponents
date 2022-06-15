import "./styles.css";
import MainNav from "./components/MainNav";
import CustomCarasaul from "./components/CustomCarasaul";
import AboutSection from "./components/AboutSection";
import ContactMe from "./components/ContactMe";
import TestSVG from "./components/TestSVG";
import CubeComponent from "./components/CubeComponent";
import ProfileSect from "./components/ProfileSect";
import Grid from "@mui/material/Grid";
import Blob from "./icons/Blob.svg";
import CreepyEyes from "./components/CreepyEyes";
export default function App() {
  const CubeSize = {
    ht: "200px",
    wdt: "200px"
  };
  return (
    <div className="App">
      <section className="MainCubeBack">
        <section className="MainCube">
          <CubeComponent Style={CubeSize} />
        </section>
      </section>
    </div>
  );
}
