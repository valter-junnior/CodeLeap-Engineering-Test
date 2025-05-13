import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { MiddlewareAuthRoute } from "./components/MiddlewareAuthRoute";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<MiddlewareAuthRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Route>
    </Routes>
  );
}

export default App;
