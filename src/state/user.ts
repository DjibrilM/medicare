import { atom } from "recoil";

const user = atom({
  key: "user-atom",
  default: {
    name: null,
    email: null,
    phoneNumber: null,
    authToken: null,
    profileImage: null,
    loggedIn: null,
    role: null,
  },
});

export default user;
