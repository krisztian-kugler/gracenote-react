import { combineReducers } from "redux";

// Process JSON data and initialize app state
export const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  data: dataReducer
});
