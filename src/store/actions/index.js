export const getCharactersList = (path) => ({
  type: "GET_CHARACTERS_SAGA",
  payload: path,
});

export const setIsLoadingChars = () => ({
  type: "IS_LOADING",
});

export const changeInput = (event) => ({
  type: "CHANGE_INPUT",
  payload: event,
});

export const getCharactersByName = () => ({
  type: "GET_CHARACTERS_BY_NAME_SAGA",
});
