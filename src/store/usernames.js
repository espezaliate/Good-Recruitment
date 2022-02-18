export const LOADING_USERNAMES = "LOADING_USERNAMES";
export const USERNAMES_LOADED = "USERNAMES_LOADED";

const initialState = {
  loading: false,
  usernames: [],
};

const usernamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_USERNAMES:
      return {
        ...state,
        loading: true,
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

export const usernamesLoaded = (usernames) => ({
  type: USERNAMES_LOADED,
  payload: {
    usernames,
  },
});

export const getUsernameList = () => async (dispatch) => {
  dispatch(loadingUsernames());
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return dispatch(usernamesLoaded(response.json()));
};

export default usernamesReducer;
