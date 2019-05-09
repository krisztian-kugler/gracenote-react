import axios from "axios";

// Fetch JSON data asynchronously and dispatch it to reducers
const fetchData = () => async dispatch => {
  const response = await axios.get("data.json");
  dispatch({
    type: "FETCH_DATA",
    payload: response.data
  });
};

export default fetchData;
