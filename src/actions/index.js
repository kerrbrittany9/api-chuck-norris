import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";

export function fetchJoke() {
  return function (dispatch) {
    return fetch("http://api.icndb.com/jokes/random").then(response => response.json(),
    error => console.log("An error occured.", error)).then(function(json) {
      const joke = (json.response.value.joke);
      console.log(joke);
    }
  })
}

export const requestJoke = (content, id) => ({
  type: types.REQUEST_SONG,
  content
  id: id
});

export const receiveJoke = (content, id) => ({
  type: types.RECEIVE_JOKE,
  id,
  content
});
