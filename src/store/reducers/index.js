let initialState = {
  characters: {
    charactersList: "",
    isLoading: false,
    next: "",
    prev: "",
    inputData: "",
  },
};

const characters = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CHARACTERS":
      return {
        ...state,
        charactersList: action.payload.results,
        isLoading: false,
        next: action.payload.info.next,
        prev: action.payload.info.prev,
      };
    case "IS_LOADING":
      return { ...state, isLoading: true };
    case "CHANGE_INPUT":
      return { ...state, inputData: action.payload };
    default:
      return state;
  }
};

export const getInputData = (state = initialState) =>
  state.characters.inputData;

export default characters;
