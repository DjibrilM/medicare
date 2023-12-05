import { ReactNode, useEffect } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import user from "../state/user";
import { UseAuthentication } from "../util/hooks/useAuth";
import { HashLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import MainLayout from "./MainLayout";

const Auth = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [_, setAuth] = useRecoilState(user);
  const { authenticate } = UseAuthentication();
  const navigate = useNavigate();

  useEffect(() => {
    authenticate()
      .then((data: any) => {
        setAuth(data);
        setLoading(false);
        navigate(("/" + data.role) as string);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      {loading ? (
        <main className="max-w-[100vw] flex flex-col items-center justify-center  w-full h-screen">
          <HashLoader
            className=" relative bottom-10"
            size={50}
            color="#4338ca"
          />
          <h1 className="font-bold text-primary-700">...Loading</h1>
        </main>
      ) : (
        <MainLayout>{children}</MainLayout>
      )}
    </>
  );
};

export default Auth;
