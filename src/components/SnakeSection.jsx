import { Button } from "@material-ui/core";
import React from "react";
import { Component } from "react";

class SnakeSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snakeArray: [[40, 40]],
      bytex: 40,
      bytey: 40,
      GameOn: true
    };
    this.ResetGame = this.ResetGame.bind(this);
    this.StartGame = this.StartGame.bind(this);
    this.MoveSnakeArray = this.MoveSnakeArray.bind(this);
    this.AddSnakeByte = this.AddSnakeByte.bind(this);
  }

  AddSnakeByte = function () {
    var newBod = this.snakeArray[0];
    if (this.snakeArray.length() === 1) {
    } else {
      var bod2 = this.snakeArray[1];
      newBod[0] = newBod[0] - bod2[0];
      newBod[1] = newBod[1] - bod2[1];
    }
    this.setState({
      snakeArray: this.snakeArray.unshift(newBod)
    });
  };

  MoveSnakeArray = function (direction) {
    var newPos = this.state.snakeArray[0];
    if (direction === 1) {
      //right
      newPos[0] = newPos[0] + 20;
    } else if (direction === 2) {
      // down
      newPos[1] = newPos[1] + 20;
    } else if (direction === 3) {
      // left
      newPos[0] = newPos[0] - 20;
    } else {
      // up
      newPos[1] = newPos[1] - 20;
    }
    this.setState({
      snakeArray: this.snakeArray.unshift(newPos)
    });
  };

  ResetGame = function () {
    this.setState({
      GameOn: false,
      snakeArray: [[40, 40]]
    });
  };

  StartGame = function () {
    this.setState({
      GameOn: true
    });
  };

  render() {
    return (
      <section className="myskills">
        <div className="SnakeGame">
          <div className="SnakeGameBoard">
            <div className="PlayButtonArea">
              {!this.state.GameOn ? (
                <Button onClick={this.StartGame} className="PlayButton">
                  <i class="bi bi-play"></i>
                </Button>
              ) : (
                <Button onClick={this.ResetGame} className="ResetButton">
                  <i class="bi bi-x-square"></i>
                </Button>
              )}
            </div>

            <div className="Snake"></div>
            <div className="byte"></div>
            {/* make a byte of the logo you want */}
          </div>
        </div>
        <div className="SkillList"></div>
      </section>
    );
  }
}

export default SnakeSection;
