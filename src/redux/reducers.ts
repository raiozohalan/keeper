import { combineReducers } from "@reduxjs/toolkit";
import { reducer as notes} from "./notes"

export const rootReducer = combineReducers({
    notes
})