import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import userAtom from "../../state/user";
import { jwtExpirationMessage } from "../../lib/constant";

export function UseAuthentication() {
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const [__, setUser] = useRecoilState(userAtom);

  const authenticate = async () => {
    setLoading(true);
    const getToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODM3YzE2OTA2ZDYyOTllNWZiYjE5NiIsIm5hbWUiOiJkamlicmlsIG11ZyIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDMxMTU3OTgsImV4cCI6MTcwMzExNTgwOH0.DOdjdJfiWjRyEITvcL-AqIab-hFIcTqHukol3y6AjVk";
    if (!getToken) {
      navigate("/auth/signin");
    }

    try {
      const request = await axios.post(
        "http://localhost:3001/auth/verify-token",
        {
          token: getToken,
        }
      );

      setUser({
        ...request.data.user,
        authToken: getToken,
        loggedIn: true,
      });

      setLoading(false);
    } catch (error: any) {
      if (error.response.data.message === jwtExpirationMessage) {
        setLoading(false);
        navigate("/session-end");
      } else {
        navigate("auth/signin");
      }
    }
  };

  return { authenticate, loading };
}
