import * as types from "../action-types";
import { setUserToken, resetUser } from "./user";
import { reqLogin, reqLogout } from "@/api/login";
import {
  setToken,
  removeToken,
  setUsername,
  removeUsername,
  setPassword,
  removePassword,
} from "@/utils/auth";
export const login = (username, password, rememberMe) => (dispatch) => {
  return new Promise((resolve, reject) => {
    reqLogin({ username: username.trim(), password: password })
      .then((response) => {
        const { data } = response;
        if (data.status === 0) {
          const token = data.token;
          dispatch(setUserToken(token));
          setToken(token);
          if (rememberMe) {
            dispatch(setRemember(username, password));
            setUsername(username);
            setPassword(password);
            console.log("remember Me ", rememberMe)
          } else {
            dispatch(removeRemember());
            removeUsername();
            removePassword();
            console.log("don't remember Me ", rememberMe)
          }
          resolve(data);
        } else {
          const msg = data.message;
          reject(msg);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const logout = (token) => (dispatch) => {
  return new Promise((resolve, reject) => {
    reqLogout(token)
      .then((response) => {
        const { data } = response;
        if (data.status === 0) {
          removeToken();
          dispatch(resetUser());
          resolve(data);
        } else {
          const msg = data.message;
          reject(msg);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const setRemember = (username, password) => {
  return {
    type: types.AUTH_SET_REMEMBER,
    username,
    password,
  };
};

export const removeRemember = () => {
  return {
    type: types.AUTH_REMOVE_REMEMBER,
  };
};
