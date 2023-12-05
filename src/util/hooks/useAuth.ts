import { User } from "../types";
import { useCallback } from "react";

const userDate: User = {
  name: "djibril",
  email: "test@gmail.com",
  phoneNumber: 785978346,
  authToken: "2d6e83b4303e30c2eec5a2f6837ba93c",
  profileImage:
    "https://img.freepik.com/premium-photo/medical-services-handsome-black-male-doctor-uniform-posing-with-folded-arms_116547-17582.jpg",
  loggedIn: true,
  role: "reception",
};

export function UseAuthentication() {
  const authenticate = useCallback(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(userDate);
      }, 2000);
    });

    return promise;
  }, []);

  return { authenticate };
}
