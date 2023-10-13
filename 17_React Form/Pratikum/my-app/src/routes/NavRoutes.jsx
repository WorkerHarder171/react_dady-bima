import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import LandingPage from "../pages/LandingPage";
import ProductDetails from "../pages/ProductDetails";
import Dashboard from "../pages/Dashboard";
// import EditTable from "../components/editTable";

function NavRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        {/* <Route path="/edit-product/:id" element={<EditTable />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default NavRoutes;
