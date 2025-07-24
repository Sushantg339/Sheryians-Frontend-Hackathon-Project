import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const routeMap = {
    "Home": "/",
    "BB Merchandise": "/bbmerch",
    "About Us": "/about",
    "Cart": "/cart",
    "User Profile": "/user"
  }

  useGSAP(() => {
    gsap.from("nav", {
      scaleY: 0,
      opacity: 0,
      duration: 0.7,
      delay: 0.5,
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="flex justify-between sm:gap-5 items-center sticky top-5 bg-[rgba(49,49,49,0.4)] backdrop-blur-sm z-20 py-2.5 px-5 mx-7 mt-5 rounded-lg h-20">
        <NavLink to="/" className="h-full flex items-center">
          <img
            className="h-[60%] border-2 p-1 rounded-md hover:scale-110 transition-all duration-300 "
            src="https://youthiapa.com/cdn/shop/files/Logo_430x_2cbbc556-17f8-4298-977c-8fb9c9754d18.png?v=1747313802&width=165"
            alt="Logo"
          />
        </NavLink>

        <div className="hidden md:flex sm:gap-10 lg:text-[15px] lg:px-15 sm:text-xs sm:whitespace-nowrap sm:px-10 lg:gap-20 bg-[rgba(161,161,170,0.4)] px-10 rounded-4xl h-full items-center">
          {["Home", "BB Merchandise", "About Us"].map((item, idx) => (
            <NavLink
              key={idx}
              to={`${routeMap[item]}`}
              className="hover:scale-[1.2] transition-all duration-300"
              style={{ transitionTimingFunction: "cubic-bezier(0.11, 0, 0.5, 0.99)" }}
            >
              {item}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex gap-8 text-xl">
          <NavLink to="/user" className="hover:scale-[1.3] transition-all duration-300">
            <i className="ri-user-3-line"></i>
          </NavLink>
          <NavLink to="/cart" className="hover:scale-[1.3] transition-all duration-300">
            <i className="ri-shopping-cart-line"></i>
          </NavLink>
        </div>

        
        <div className="md:hidden text-2xl text-white cursor-pointer" onClick={toggleMenu}>
          <i className="ri-menu-3-line"></i>
        </div>
      </nav>

      
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg z-30 transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
    
        <div className="flex justify-end p-4 text-2xl cursor-pointer" onClick={toggleMenu}>
          <i className="ri-close-line"></i>
        </div>

    
        <div className="flex flex-col gap-6 px-6 mt-10 text-lg ">
          {["Home", "BB Merchandise", "About Us"].map((item, idx) => (
            <NavLink
              key={idx}
              to={`${routeMap[item]}`}
              className="active:text-gray-700 active:scale-95 transition-all border-b-2 px-2 py-4 "
              onClick={toggleMenu}
            >
              {item}
            </NavLink>
          ))}
        </div>

        
        <div className="flex gap-6 px-6 mt-10 text-xl">
          <NavLink to="/user" onClick={toggleMenu}>
            <i className="ri-user-3-line"></i>
          </NavLink>
          <NavLink to="/cart" onClick={toggleMenu}>
            <i className="ri-shopping-cart-line"></i>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
