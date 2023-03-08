import axios from "axios";

const artists = (state = [], action) => {
  if (action.type === "SET_ARTISTS") {
    return action.artists;
  }
  if (action.type === "UPDATE_ARTIST") {
    return state.map((artist) =>
      artist.id === action.artist.id ? action.artist : artist
    );
  }
  if (action.type === "CREATE_ARTIST") {
    return [...state, action.artist];
  }

  return state;
};

export const fetchArtists = () => {
  return async (dispatch) => {
    const response = await axios.get("/artists");
    dispatch({ type: "SET_ARTISTS", artists: response.data });
  };
};

export const updateArtist = (person) => {
  return async (dispatch) => {
    const response = await axios.put(`/artists/${person.id}`, person);
    dispatch({ type: "UPDATE_ARTIST", artist: response.data });
  };
};

export const createArtist = (person) => {
  return async (dispatch) => {
    const response = await axios.post("/artists", person);
    dispatch({ type: "CREATE_ARTIST", artist: response.data });
  };
};

export default artists;
