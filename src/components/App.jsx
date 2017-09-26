import React from "react";
import Header from "./Header";
import JokeDisplay from "./JokeDisplay";
import Background from "./../images/chuck.jpg";

function App(){
  var backgroundStyle = {
    backgroundImage: "url(" + Background + ")",
    height: '600',
    color: 'orange',
    backgroundRepeat: "no-repeat"
  }

  return (
    <div style={backgroundStyle}>
      <Header />
      <JokeDisplay />
    </div>
  );
}

export default App;
