import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";

export function fetchJoke(dispatch) {
  return function (dispatch) {
    const jokeId = v4();
    dispatch(requestJoke(jokeId));
    console.log("hi");
    return fetch("http://api.icndb.com/jokes/random")
    .then(
      function(response){
        return response.json();
      },
      function(error) {
       console.log("An error occured.", error);
     })

    .then(function(json) {
      const content = json.value.joke;
      return dispatch(receiveJoke(content, jokeId));
    });
  };
}

export const requestJoke = function(jokeId) {
  return {
    type: types.REQUEST_JOKE,
    jokeId
  };
};

export const receiveJoke = (content, jokeId) => ({
  type: types.RECEIVE_JOKE,
  jokeId,
  content
});
