import axios from "axios";

const admin = (state = {}, action) => {
  if (action.type === "SET_ADMIN") {
    return action.admin;
  }
  return state;
};

export const logout = (navigate) => {
  return async (dispatch) => {
    window.localStorage.removeItem("token");
    dispatch({ type: "SET_ADMIN", admin: {} });
    navigate("/");
  };
};

export const loginWithToken = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem("token");
    if (token) {
      const response = await axios.get("/admin", {
        headers: {
          authorization: token,
        },
      });
      dispatch({ type: "SET_ADMIN", admin: response.data });
    }
  };
};

export const updateAdmin = (auth) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const response = await axios.put("/admin", auth, {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: "SET_ADMIN", auth: response.data });
  };
};

export const attemptLogin = (credentials, navigate) => {
  return async (dispatch) => {
    const response = await axios.post("/admin", credentials);
    window.localStorage.setItem("token", response.data);
    dispatch(loginWithToken());
    navigate("/");
  };
};

export const register = (credentials, navigate) => {
  return async (dispatch) => {
    const response = await axios.post("/admin/register", credentials);
    window.localStorage.setItem("token", response.data);
    dispatch(loginWithToken());
    navigate("/");
  };
};

export default admin;
