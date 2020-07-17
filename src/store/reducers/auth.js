import * as types from "../action-types";
import { getUsername, getPassword } from "@/utils/auth";
const initAuthInfo = {
  username: getUsername(),
  password: getPassword(),
};
export default function auth(state = initAuthInfo, action) {
  switch (action.type) {
    case types.AUTH_SET_REMEMBER:
      return {
        username: action.username,
        password: action.password,
      };
    case types.AUTH_REMOVE_REMEMBER:
      return {
        username: "",
        password: "",
      };
    default:
      return state;
  }
}
