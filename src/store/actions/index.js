import { login, logout } from "./auth";
import { getUserInfo, setUserToken, setUserInfo, resetUser } from "./user";
import { addTag, emptyTaglist, deleteTag, closeOtherTags } from "./tagsView";
import { changeSetting } from "./settings";
import { toggleSiderBar, toggleSettingPanel } from "./app";

export {
  login,
  logout,
  getUserInfo,
  setUserToken,
  setUserInfo,
  resetUser,
  addTag,
  emptyTaglist,
  deleteTag,
  closeOtherTags,
  changeSetting,
  toggleSiderBar,
  toggleSettingPanel,
};
