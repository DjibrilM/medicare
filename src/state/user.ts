import { atom } from "recoil";

const user = atom({
  key: "user-atom",
  default: {
    name: "djibril",
    email: "test@gmail.com",
    phoneNumber: 785978346,
    authToken: "2d6e83b4303e30c2eec5a2f6837ba93c",
    profileImage: "",
    loggedIn: false,
    role: "reception",
  },
});

export default user;
