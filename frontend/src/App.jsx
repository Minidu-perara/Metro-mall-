import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./pages/AdminDashboard/DashboardLayout";
import About from "./pages/about/About";
import AdminHeader from "./components/AdminHeader/AdminHeader"
import Footer from "./components/Footer/Footer";
import './App.css';
import DashboardHome from "./pages/AdminDashboard/DashboardHome/DashboardHome";
import Stores from "./pages/AdminDashboard/AdminStores/AdminStores";
import AddStores from "./pages/AdminDashboard/AdminStores/AddStores";
import UpdateStores from "./pages/AdminDashboard/AdminStores/UpdateStores";
import FoodBeverages from "./pages/FoodBeveragesPage/FoodBeverages";
import FoodDescription from "./pages/FoodBeveragesPage/FoodDescription";



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
        <Route path="/fooddescription" element={<FoodDescription/>} />
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
