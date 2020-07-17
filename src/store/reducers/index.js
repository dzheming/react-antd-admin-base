import { combineReducers } from "redux";
import auth from './auth';
import user from "./user";
import tagsView from "./tagsView";
import settings from "./settings";
import app from "./app";

export default combineReducers({
    auth,
    user,
    tagsView,
    settings,
    app,
});
