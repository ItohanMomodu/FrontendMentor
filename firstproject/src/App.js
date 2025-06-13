import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  
  const Values = [ {id: 1, name: "Reaction", color: "#51494B", first: "80", second: "/100"}, {id: 2, name: "Memory", color: "#514E49", first: "92", second: "/100"}, {id: 3, name: "Verbal", color: "#495149", first: "61", second: "/100"}, {id: 4, name: "Visual", color: "#494B51", first: "73", second: "/100"} ]

  /*const color ={
    background-color: Value.color;
  }*/

  const [color, setColor] = useState("");
  return (
    <div className="body">
      <div className="halfpart">
	<div className="center">
	  <h3>Your Result</h3>
	  <div className="circle">
	    <p className="big">76</p>
	    <p>of 100</p>
	  </div>
	  <h1 className="great">Great</h1>
	  <div className="wrap">
	    <p>You scored higher than 65% of the people who have taken
	    these test
	    </p>
	  </div>
	</div>
	<div className="secondpart">
	  <h2 className="summary">Summary</h2>
	  <div className="types">
	    <div className="firstcolor">
	      <img src="https://img.icons8.com/DB7E75/parakeet-line/48/lightning-bolt.png" alt="reactions" className="logo" />
              <p className="firsttext">Reaction</p>
              <div className="score">
	        <p>80</p>
                <p className="total">/100</p>
	      </div>
	    </div>
	    <div className="secondcolor">
	      <img src="https://img.icons8.com/ios/E5AD43/48/clock--v1.png" alt="clock--v1" className="logo" />
              <p className="secondtext">Memory</p>
              <div className="score">
	        <p>80</p>
                <p className="total">/100</p>
	      </div>
            </div>
	    <div className="thirdcolor">
	      <img src="https://img.icons8.com/6EEB6B/material-outlined/48/filled-topic.png" alt="filled-topic" className="logo" />
              <p className="color" style={{color: "#51494B"}}>Verbal</p>
              <div className="score">
	        <p>80 </p>
                <p className="total">/ 100</p>
	      </div>
            </div>
	    <div className="fourthcolor">
	      <img src="https://img.icons8.com/424EA1/ios/48/visible--v1.png" alt="visible--v1" className="logo"/>
              <p className="color" style={{color: "#494B51"}}>Visual</p>
              <div className="score">
	        <p>80</p>
                <p className="total">/100</p>
	      </div>
            </div>
	  </div>
	  <div className="continue"><p>Continue</p></div>
	</div>
      </div>
    </div>
  );
}

export default App;
