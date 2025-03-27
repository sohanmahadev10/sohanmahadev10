import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import smImage from "./sm.png";  // Import the image file

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5500);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <div className="logo_wrapper">
        <div className="screen" style={{ backgroundColor: this.props.theme.splashBg }}>
          {/* Displaying the image */}
          <img src={smImage} alt="Splash" className="splash-image" />
        </div>
      </div>
    );
  }
}

export default Splash;
