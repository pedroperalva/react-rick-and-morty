export const getCharactersList = (path) => ({
  type: "GET_CHARACTERS_SAGA",
  payload: path,
});

export const setIsLoadingChars = () => ({
  type: "IS_LOADING",
});
