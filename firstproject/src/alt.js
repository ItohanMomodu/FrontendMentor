import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App(props) {
  
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
	  <h2>Summary</h2>
	  <div className="types">
	    {Values.map(function(data) {
              return (
                <div key={data.id} className="each">
		  {(() => {
		    setColor(data.color);
		    <div className="color" style={{ backgroundColor: `${data.color}` }}>
                      <p className="text-color" style={{color: `${data.color}`}}>{Values.name}</p>
		      <p>{data.first}</p>
                      <p style={{opacity: 0.5}}>{data.second}</p>
                    </div>
		  })()}
                </div>
              )
            })}
	  </div>
	  <div className="continue"><p>Continue</p></div>
	</div>
      </div>
    </div>
  );
}

export default App;
