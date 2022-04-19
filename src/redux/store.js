import { createStore } from "redux";
import reducer from "./movieReducer";

const store = createStore(reducer);

export default store;
