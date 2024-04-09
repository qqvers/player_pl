import HomePage from "./pages/HomePage/HomePage";
import Sign from "./pages/Sign/Sign";
import SelectedPage from "./pages/SelectedPage/SelectedPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/selected/:id" element={<SelectedPage />} />
          <Route path="/signup" element={<Sign signup={true} />} />
          <Route path="/login" element={<Sign signup={false} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
