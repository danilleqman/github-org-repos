import { combineReducers } from "@reduxjs/toolkit";
import org from "./org";
import loader from "./loading";

export const reducer = combineReducers({
  org,
  loader,
});
