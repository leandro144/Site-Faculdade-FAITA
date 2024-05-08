import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage.jsx'
import Mural from './pages/Mural.jsx'



const RouteConfig = () => (
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mural" element={<Mural />} />
    </Routes>
  </BrowserRouter>
);

export default RouteConfig;