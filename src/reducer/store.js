import { createStore } from "redux";
import noteReducer from './noteApp'

const store = createStore(noteReducer);

export default store