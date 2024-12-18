import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Buyer/Dashboard";
import Profile from "./pages/Common/Profile";
import BuyerDashboardLayout from "./pages/Buyer/BuyerDashboardLayout";
import MyBids from "./pages/Buyer/MyBids";
import Products from "./pages/Buyer/Products";
import LandingPage from "./pages/Common/LandingPage";
import ContactUs from "./pages/Common/ContactUs";
import LandingPageLayout from "./pages/Common/LandingPageLayout";
import MarketPlace from "./pages/Buyer/MarketPlace";
import SellerDashboard from "./pages/Seller/SellerDashboard";
import Login from "./pages/Common/Login";
import SignUp from "./pages/Common/SignUp";
import AboutUs from "./pages/Common/AboutUs";
import ProductDetails from "./pages/Buyer/ProductDetails";
import PrivateRoute from "./Components/Common/PrivateRoute";
import PrivateRoute2 from "./Components/Common/PrivateRoute2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="market" element={<MarketPlace />} />
          <Route path="login" element={<PrivateRoute2><Login /></PrivateRoute2>} />
          <Route path="signup" element={<PrivateRoute2><SignUp /></PrivateRoute2>} />
          <Route path="aboutus" element={<AboutUs />} />
          
        </Route>
        <Route path="/contactus" element={<ContactUs />} />
        <Route
          path="/dashboard"
          element={<Navigate to="/dashboard" replace />}
        />
        <Route path="/buyer-dashboard" element={<PrivateRoute><BuyerDashboardLayout /></PrivateRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="my-bids" element={<MyBids />} />
          <Route path="products" element={<Products />} />
          <Route path="productsDetails/:id" element={<ProductDetails />} />
        </Route>
        <Route path="/seller-dashboard" element={<PrivateRoute><SellerDashboard /></PrivateRoute>}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
