import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState(""); // Tracks the active nav link
  const [toggle, setToggle] = useState(false); // Manages mobile menu toggle
  const [scrolled, setScrolled] = useState(false); // Tracks scroll for background changes

  // Update `scrolled` state on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Render desktop navigation
  const renderDesktopNav = () => (
    <ul className="list-none hidden sm:flex flex-row gap-10">
      {navLinks.map((nav) => (
        <li
          key={nav.id}
          className={`${
            active === nav.title ? "text-white" : "text-secondary"
          } hover:text-white text-[18px] font-medium cursor-pointer`}
        >
          <ScrollLink
            to={nav.path.substring(1)} // Remove `#` and use the id directly
            smooth={true}
            duration={500}
            offset={-70} // Offset for fixed navbar
            onSetActive={() => setActive(nav.title)}
            onClick={() => setActive(nav.title)}
          >
            {nav.title}
          </ScrollLink>
        </li>
      ))}
    </ul>
  );

  // Render mobile navigation
  const renderMobileNav = () => (
    <div
      className={`${
        !toggle ? "hidden" : "flex"
      } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
    >
      <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-medium cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-secondary"
            }`}
          >
            <ScrollLink
              to={nav.path.substring(1)}
              smooth={true}
              duration={500}
              offset={-70}
              onSetActive={() => setActive(nav.title)}
              onClick={() => {
                setToggle(false); // Close the menu
                setActive(nav.title);
              }}
            >
              {nav.title}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and Home Link */}
        <ScrollLink
          to="hero" // Use the id of the Hero section
          smooth={true}
          duration={500}
          offset={-70}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-32 h-15 object-contain" />
          <p className="text-white font-bold cursor-pointer flex logo">
            <span className="portfolio sm:block hidden md:text-small">
              Professional Portfolio
            </span>
          </p>
        </ScrollLink>

        {/* Desktop Navigation */}
        {renderDesktopNav()}

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          {renderMobileNav()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
