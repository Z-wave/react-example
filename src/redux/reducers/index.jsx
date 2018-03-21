import {combineReducers} from "redux";
import indexList from "../actions/indexList";
import detail from "../actions/detail";

let Reducers = combineReducers({
    indexList,
    detail
});
export default Reducers;