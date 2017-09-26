import React from "react";
import { fetchJoke }  from "./../actions";
import { connect } from "react-redux";

const JokeDisplay = ({ dispatch, joke }) => {
  console.log(joke);
  return (
    <div>
      <div>
        <h1>{joke}</h1>
      </div>
      <button onClick={() => {dispatch(fetchJoke())}}>Next Joke</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    joke: state.content
  };
};


export default connect(mapStateToProps)(JokeDisplay);
