import axios from "axios";

const getChars = async (path) => {
  const resp = await axios.get(
    `https://rickandmortyapi.com/api/${
      path.payload ? path.payload : "character"
    }`
  );
  return resp.data;
};

export { getChars };
