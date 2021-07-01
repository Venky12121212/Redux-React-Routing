import {combineReducers} from "redux";
import {employeeReducer} from "./employees/employeeReducer";

let rootReducer = combineReducers({
    employee: employeeReducer
});

export {rootReducer}