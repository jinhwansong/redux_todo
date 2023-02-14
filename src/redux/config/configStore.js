import { combineReducers, createStore } from "redux";
import todo from "../modules/todo";
const rootReduser = combineReducers({
    todo:todo
})

const store = createStore(rootReduser);
export default store