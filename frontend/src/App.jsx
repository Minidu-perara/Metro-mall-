import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import About from "./pages/about/About";
import Footer from "./components/Footer/footer";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<DashboardLayout component={<About />} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
