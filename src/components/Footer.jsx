import { NavLink } from "react-router-dom";
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-10 px-5 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <NavLink to="/" className="text-2xl font-bold text-white">
            Youthiapa
          </NavLink>
          <p className="text-sm">
            Official merchandise store of Bhuvan Bam – quality gear that tells a
            story.
          </p>
          <div className="flex gap-4 text-xl mt-2">
            <a target="_blank" href="https://www.instagram.com/bhuvan.bam22/" aria-label="Instagram" className="hover:text-white">
              <FaInstagram />
            </a>
            <a target="_blank" href="https://www.youtube.com/channel/UCqwUrj10mAEsqezcItqvwEw" aria-label="YouTube" className="hover:text-white">
              <FaYoutube />
            </a>
            <a target="_blank" href="https://x.com/Bhuvan_Bam" aria-label="Twitter" className="hover:text-white">
              <FaTwitter />
            </a>
            <a target="_blank" href="https://www.facebook.com/bhuvan.bam/" aria-label="Facebook" className="hover:text-white">
              <FaFacebook />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-white">Home</NavLink>
            </li>
            <li>
              <NavLink to="/bbmerch" className="hover:text-white">Merchandise</NavLink>
            </li>
            <li>
              <NavLink to="/raised-right" className="hover:text-white">Raised Right</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-white">About</NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact & Support</h4>
          <p className="text-sm">
            Email: <a href="mailto:hello@youthiapa.com" className="hover:text-white">hello@youthiapa.com</a>
          </p>
          <p className="text-sm mt-2">
            Address: Youthiapa HQ, Mumbai, India
          </p>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      <p className="text-center text-sm">
        © {new Date().getFullYear()} Youthiapa. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
