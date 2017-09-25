import React from "react";
import Header from "./Header";
import JokeDisplay from "./JokeDisplay";

function App(){
  return (
    <div>
      <Header />
      <div>
        <hr/>
      </div>
      <div>
        <JokeDisplay />
      </div>
    </div>
  );
}

export default App;
