import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import NotFound from "../Pages/NotFound";

const Home = lazy(() => import("../Pages/Home"));
const Login = lazy(() => import("../Pages/Login"));
const Signup = lazy(() => import("../Pages/Signup"));
const BBMerchandise = lazy(() => import("../Pages/BBMerchandise"));
const ProductDetail = lazy(() => import("../Pages/ProductDetail"));
const About = lazy(() => import("../Pages/About"));
const UserProfile = lazy(() => import("../Pages/UserProfile"));
const Cart = lazy(() => import("../Pages/Cart"));

const MainRoutes = () => {
  return (
    <Suspense fallback={<div className="text-center py-20 text-xl">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bbmerch" element={<BBMerchandise />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
