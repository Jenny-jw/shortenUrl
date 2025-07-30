import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import ResultUrl from "./components/ResultUrl.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<ResultUrl />} />
    </Routes>
  );
};

export default App;
