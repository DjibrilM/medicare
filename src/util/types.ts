import { RecoilValue } from "recoil";

export interface NavigationLink {
  link: string;
  label: string;
}

export interface User {
  name: string;
  email: string;
  phoneNumber: number;
  profileImage: string;
  authToken: string;
  loggedIn: boolean;
  role: string;
}
