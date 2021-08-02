import React from "react";
import "./App.scss";
import icon from "./coming-soon-white.svg";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <span className="App__businessName">Harts Holler Graphics</span>
      <img src={icon} alt="Coming soon" />
      <span className="App__subtext">Brought to you by Tidal Sites, LLC</span>
      <div className="contact">
        <span>Contact us while this website is being built:</span>
        <div className="phone">
          <span>Phone: (870) 405-3822</span>
        </div>
        <div className="email">
          <span>Email: hartshollergraphics@outlook.com</span>
        </div>
      </div>
    </div>
  );
};

export default App;
