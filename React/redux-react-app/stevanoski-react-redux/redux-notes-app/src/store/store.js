import { createStore } from "redux";
import reducers from "../reducers/reducers";

let initialState = {
  notes: [
    { title: "Title 1", content: "Some content." },
    { title: "Title 2", content: "Some more content." },
  ],
  visibility: "TAG",
};

export default createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
