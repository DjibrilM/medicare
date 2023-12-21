import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Dashboard/Admin";
import SignIn from "./pages/Authentication/SignIn";
import Loader from "./common/Loader";
import routes from "./routes";
import { UseAuthentication } from "./util/hooks/useAuth";
import SessionEnd from "./pages/error/session-end";

const DefaultLayout = lazy(() => import("./layout/DefaultLayout"));
function App() {
  const { loading, authenticate } = UseAuthentication();

  useEffect(() => {
    authenticate();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />

      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/session-end" element={<SessionEnd />} />

        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />

          {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
