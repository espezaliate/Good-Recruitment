export const LOADING_USERNAMES = "LOADING_USERNAMES";
export const LOADING_ERROR = "LOADING_ERROR";
export const USERNAMES_LOADED = "USERNAMES_LOADED";

const initialState = {
  loading: false,
  usernames: [],
  error: {
    status: false,
    message: "",
  },
};

const usernamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_USERNAMES:
      return {
        ...state,
        loading: true,
      };
    case LOADING_ERROR:
      return {
        ...state,
        loading: false,
        error: {
          status: true,
          message: action.payload.usernames,
        },
      };
    case USERNAMES_LOADED:
      return {
        ...state,
        loading: false,
        usernames: action.payload.usernames,
      };
    default:
      return state;
  }
};

export const loadingUsernames = () => ({
  type: LOADING_USERNAMES,
});

export const loadingFailed = (error) => ({
  type: LOADING_ERROR,
  payload: {
    error,
  },
});

export const usernamesLoaded = (usernames) => ({
  type: USERNAMES_LOADED,
  payload: {
    usernames,
  },
});

export const getUsernameList = () => async (dispatch) => {
  dispatch(loadingUsernames());
  try {
    const response = await fetch(".asd");
    const parsed = await response.json();
    return dispatch(usernamesLoaded(parsed.map((i) => i.username)));
  } catch (e) {
    dispatch(loadingFailed(e));
  }
};

export default usernamesReducer;
