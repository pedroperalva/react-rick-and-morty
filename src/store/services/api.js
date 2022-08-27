import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/";

const getChars = async (path) => {
  let query = "";
  if (path.payload === undefined) {
    query = "character";
  } else if (path.payload.includes("name")) {
    query = `character/${path.payload}`;
  } else {
    query = path.payload;
  }

  try {
    const resp = await axios.get(`${API_URL}${query}`);
    return resp.data;
  } catch (error) {
    return console.log(error);
  }
};

const getCharByName = async (path) => {
  try {
    const resp = await axios.get(`${API_URL}character/?name=${path}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export { getChars, getCharByName };
