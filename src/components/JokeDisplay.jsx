import React from "react";
import { fetchJoke }  from "./../actions";
import { connect } from "react-redux";

const JokeDisplay = ({ dispatch, joke }) => {

  var jokeStyle = {
    paddingTop: "40%"
  }

  return (
    <div  style={jokeStyle}>
      <h1>{joke}</h1>
      <button onClick={() => {dispatch(fetchJoke())}}>Next Joke</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    joke: state.fixedContent
  };
};


export default connect(mapStateToProps)(JokeDisplay);
