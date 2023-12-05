import { Routes, Route } from "react-router-dom";
import Rception from "./page/receptionService/index";
import Auth from "./components/Auth";

function App() {
  return (
    <Auth>
      <Routes>
        <Route path="/reception" element={<Rception />} />
        <Route path="/doctors" element={<>doctors</>} />
      </Routes>
    </Auth>
  );
}

export default App;
