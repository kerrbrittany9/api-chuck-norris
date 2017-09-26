import constants from "./../constants";
import v4 from "uuid/v4";

const { defaultState, types } = constants;

const selectedJoke = (state = defaultState, action) => {
  let newState;
  let newJoke;
  let joke;

  switch (action.type) {
    case types.REQUEST_JOKE:
      newJoke = {
        isFetching: true,
        jokeId: action.jokeId
      };
      newState = Object.assign({}, state, {
        [action.jokeId]: newJoke
      });
      return newState;
    case types.RECEIVE_JOKE:
      joke = state[action.jokeId];
      newJoke = {
        isFetching: false,
        content: action.content,
        jokeId: action.jokeId
    };
    // newState = Object.assign({}, state, {
    //   [action.jokeId]: newJoke
    // });
    return newJoke;
      default:
        return state;
  }
};

export default selectedJoke;
