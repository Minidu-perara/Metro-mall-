import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./pages/AdminDashboard/DashboardLayout";
import AdminHeader from "./components/AdminHeader/AdminHeader";
import './App.css';
import DashboardHome from "./pages/AdminDashboard/DashboardHome/DashboardHome";
import Stores from "./pages/AdminDashboard/AdminStores/AdminStores";
import AddStores from "./pages/AdminDashboard/AdminStores/AddStores";
import UpdateStores from "./pages/AdminDashboard/AdminStores/UpdateStores";
import FoodBeverages from "./pages/FoodBeveragesPage/FoodBeverages";
import FoodDescription from "./pages/FoodBeveragesPage/FoodDescription";
import AdminFooter from "./components/AdminFooter/AdminFooter";



function App() {
  return (
    <div>
      <AdminHeader/>
      <Routes>
        <Route path="/admindashboard" element={<DashboardLayout component={<DashboardHome />} />} />
        <Route path="/admindashboard/stores" element={<DashboardLayout component={<Stores />} />} />
        <Route path="/admindashboard/stores/add" element={<DashboardLayout component={<AddStores />} />} />
        <Route path="/admindashboard/stores/update/:id" element={<DashboardLayout component={<UpdateStores />} />} />
        <Route path="/foodbeverages" element={<FoodBeverages/>} />
        <Route path="/fooddescription/:id" element={<FoodDescription/>} />
      </Routes>
     <AdminFooter/>
    </div>
  );
}

export default App;
