import { Routes, Route } from "react-router-dom";
import Rception from "./page/receptionService/index";
import Auth from "./components/Auth";

function App() {
  return (
    <Auth>
      <Routes>
        <Route path="/reception" element={<Rception />} />
        <Route path="/doctor" element={<>doctors</>} />
        <Route
          path="/check"
          element={<div className="w-full h-20 bg-red-300">check</div>}
        />
      </Routes>
    </Auth>
  );
}

export default App;
