let initialState = {
  characters: {
    charactersList: "",
    isLoading: false,
  },
};

const characters = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CHARACTERS":
      return {
        charactersList: action.payload.results,
        isLoading: false,
        next: action.payload.info.next,
        prev: action.payload.info.prev,
      };
    case "IS_LOADING":
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default characters;
