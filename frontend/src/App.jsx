import { Routes, Route, useLocation  } from "react-router-dom";
import { ToastContainer} from 'react-toastify';

import DashboardLayout from "./pages/AdminDashboard/DashboardLayout";
import AdminHeader from "./components/AdminHeader/AdminHeader";
import DashboardHome from "./pages/AdminDashboard/DashboardHome/DashboardHome";
import Stores from "./pages/AdminDashboard/AdminStores/AdminStores";
import AddStores from "./pages/AdminDashboard/AdminStores/AddStores";
import UpdateStores from "./pages/AdminDashboard/AdminStores/UpdateStores";
import FoodBeverages from "./pages/FoodBeveragesPage/FoodBeverages";
import FoodDescription from "./pages/FoodBeveragesPage/FoodDescription";
import AdminFooter from "./components/AdminFooter/AdminFooter";
import ClientHeader from "./components/ClientHeader/ClientHeader";
import ClientFooter from "./components/ClinetFooter/ClientFooter";
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
import SOItems from "./pages/ShopOwnerDashboard/ItemsPage/Items/SOItems"
import SOPreorders from "./pages/ShopOwnerDashboard/SOPreorders/sopreorders/SOPreorders";
import SOCompleteOrders from "./pages/ShopOwnerDashboard/SOCompleteorders/SOCompleteOrders";
import SOAddItem from "./pages/ShopOwnerDashboard/ItemsPage/SOAddItem/SOAddItem";
import SOUpdate from "./pages/ShopOwnerDashboard/ItemsPage/SOUpdateItem/SOUpdate";

function App() {
  const location = useLocation();
  const isAdminDashboard = location.pathname.startsWith('/admindashboard');
  const isClientDashboard = !isAdminDashboard;

  return (
    <div>
      {isAdminDashboard ? <AdminHeader /> : <ClientHeader />}
      <ToastContainer/>
      <Routes>
        <Route path="/admin-dashboard" element={<DashboardLayout />} />
        <Route path="/shopowner-dashboard" element={<SDashboardLayout component={<SOhome />} />} />
        <Route path="/shopowner-dashboard/items" element={<SDashboardLayout component={<SOItems />} />} />
        <Route path="/shopowner-dashboard/preorders" element={<SDashboardLayout component={<SOPreorders />} />} />
        <Route path="/shopowner-dashboard/complete-orders" element={<SDashboardLayout component={<SOCompleteOrders />} />} />
        <Route path="/shopowner-dashboard/add-items" element={<SDashboardLayout component={<SOAddItem />} />} />
        <Route path="/shopowner-dashboard/update-items/:id" element={<SDashboardLayout component={<SOUpdate />} />} />
        <Route path="/my-preorders" element={<Preorder/>} />
        <Route path="/items-page" element={<Items/>} />
        {/* not found */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
      {isAdminDashboard && <AdminFooter />}
      {isClientDashboard && <ClientFooter />}
    </div>
  );
}

export default App;
