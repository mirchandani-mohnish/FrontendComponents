import "./css-components/cubeStylesheet.css";
import { React, Component } from "react";

const Cube = (props) => {
  const { wdt, ht } = props.Style;
  const cubeDim = {
    height: ht,
    width: wdt
  };

  return (
    <div className="entirecube">
      <div className="placeCube">
        <div className="cube" style={cubeDim}>
          <div>
            <span className="top"></span>
            <span Style="--i: 0;"></span>
            <span Style="--i: 1;"></span>
            <span Style="--i: 2;"></span>
            <span Style="--i: 3;"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

// class Cube extends Component {
//   render() {

//   }
// }

export default Cube;
