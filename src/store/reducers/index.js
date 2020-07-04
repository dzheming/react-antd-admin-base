import { combineReducers } from "redux";
import user from "./user";
import tagsView from "./tagsView";
import settings from "./settings";
import app from "./app";

export default combineReducers({
    user,
    tagsView,
    settings,
    app,
});
