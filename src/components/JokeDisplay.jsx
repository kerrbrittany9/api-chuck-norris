import React from "react";
import { fetchJoke }  from "./../actions";

function JokeDisplay(props) {
  return (
    <div>
      <div>
        <h1>{content}</h1>
      </div>
      <button onClick={e => {
          e.preventDefault();{dispatch(fetchJoke())}
        }}>Next Joke</button>
    </div>
  );
}

JokeDisplay.propTypes = {
  content: PropTypes.string
}

export default JokeDisplay;
