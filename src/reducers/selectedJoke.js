import constants from "./../constants";
const { defaultState, types } = constants;

const selectedJoke = (state = defaultState.selectedJoke, action) => {
  let newState;

  let newJoke;
  let joke;

  switch (action.type) {
    case types.REQUEST_JOKE:
      newJoke = {
        isFetching: true,
        joke: action.joke,
        id: action.id
      };
      newState = Object.assign({}, state, {
        [action.id]: newJoke
      });
      return newState;
    case types.RECEIVE_JOKE:
      joke = state[action.id];
      newJoke = Object.assign({}, joke, {
        isFetching: false,
        joke: action.joke,
        id: action.id
    });
    newState = Object.assign({}, state, {
      [action.id]: newJoke
    });
    return newState;
      default:
        return state;
  }
};

export default selectedJoke;
