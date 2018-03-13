import {combineReducers} from "redux";
import indexList from "./indexList";
import detailList from "./detailList";

let Reducers = combineReducers({
    indexList,
    detailList
});
export default Reducers;