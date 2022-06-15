import React from "react";
import { Component } from "react";
import "./css-components/creepyEyesStylesheet.css";
import { useState, useEffect } from "react";
import Aos from "aos";

class CreepyEyes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 50,
      y: 50,
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
      winScrollPos: 0
    };

    this._onScroll = this._onScroll.bind(this);
  }

  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
  }

  _onScroll(e) {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;
    console.log(scrolled);
    this.setState({
      winScrollPos: scrolled * 100
    });
  }

  render() {
    const { x, y, winWidth, winHeight, winScrollPos } = this.state;
    if (winWidth <= 980) {
      let toppos = winScrollPos;

      const eyeballstyle = {
        left: "50%",
        top: toppos,
        transform: "translate(-50% , -" + toppos + ")"
      };
      return (
        <>
          <div className="EyeSect" onScroll={this._onScroll}>
            <div className="Eyes">
              <div className="Eye">
                <div className="EyeBall" style={eyeballstyle}></div>
              </div>
              <div className="Eye">
                <div className="EyeBall" style={eyeballstyle}></div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      let leftpos =
        (x * 100) / winWidth < 100 ? (x * 100) / winWidth - 10 + "%" : "90%";
      let toppos =
        (y * 100) / winHeight < 100 ? (y * 100) / winHeight - 10 + "%" : "90%";
      const eyeballstyle = {
        left: leftpos,
        top: toppos,
        transform: "translate(-" + leftpos + ", -" + toppos + ")"
      };
      return (
        <div className="EyeSect" onMouseMove={this._onMouseMove.bind(this)}>
          <div className="Eyes">
            <div className="Eye">
              <div className="EyeBall" style={eyeballstyle}></div>
            </div>
            <div className="Eye">
              <div className="EyeBall" style={eyeballstyle}></div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CreepyEyes;
