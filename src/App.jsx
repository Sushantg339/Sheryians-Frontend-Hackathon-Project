import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainRoutes from "./routes/MainRoutes";


const App = () => {
  const location = useLocation();
  const hideFooterRoutes = ['/login', '/signup', '/*'];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <div id="main" className="bg-zinc-300 h-screen overflow-x-hidden overflow-y-scroll relative">
      <Navbar />
      <MainRoutes />
      {!shouldHideFooter && <Footer />}
    </div>
  );
};

export default App;
