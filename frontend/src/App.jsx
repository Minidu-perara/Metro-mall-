import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import SDashboardLayout from "./pages/ShopOwnerDashboard/SDashboardLayout";
import About from "./pages/about/About";
import Footer from "./components/Footer/footer";
import Preorder from "./pages/Preorder/preorderPage/Preorder";
import NotFound from "./pages/notFound/NotFound"
import Items from "./pages/ItemsPage/Items/Items"
import SOhome from "./pages/ShopOwnerDashboard/SODashboardHome/SOhome";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/admin-dashboard" element={<DashboardLayout />} />
        <Route path="/shopowner-dashboard" element={<SDashboardLayout component={<SOhome />} />} />
        <Route path="/my-preorders" element={<Preorder/>} />
        <Route path="/items-page" element={<Items/>} />
        {/* not found */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
