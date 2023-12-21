import useraAtom from "../../state/user";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ReactNode } from "react";

const Authorization = ({ children }: { children: ReactNode }) => {
  const userData = useRecoilValue(useraAtom);

  return (
    <>
      {userData.loggedIn ? <>{children}</> : <Navigate to={"/auth/signin"} />}
    </>
  );
};

export default Authorization;
