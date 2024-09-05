import { useState, useCallback, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/bicc logo.png";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiPhone,
  FiCalendar,
  FiMail,
} from "react-icons/fi";
import { exploreUsLinks, navLinks } from "../data/navData";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuHover, setSubmenuHover] = useState(false);

  const toggleMenu = useCallback(() => setMenuOpen(!menuOpen), [menuOpen]);
  const toggleSubmenu = useCallback(
    () => setSubmenuOpen(!submenuOpen),
    [submenuOpen]
  );

  const handleSubmenuEnter = useCallback(() => setSubmenuHover(true), []);
  const handleSubmenuLeave = useCallback(() => setSubmenuHover(false), []);

  const renderContactInfo = useMemo(
    () => (
      <>
        <a
          href="tel:+8801755636335"
          className="flex items-center space-x-2 text-gray-700 text-base font-semibold"
          aria-label="Call us at +8801755636335"
        >
          <FiPhone size={18} className="text-secondary" />
          <span>+8801755636335</span>
        </a>
        <a
          href="mailto:info@bicc-bd.com"
          className="flex items-center space-x-2 text-gray-700  text-base font-semibold"
          aria-label="Email us at info@bicc-bd.com"
        >
          <FiMail size={18} className="text-secondary" />
          <span>info@bicc-bd.com</span>
        </a>
        <div className="flex items-center space-x-2 text-gray-700  text-base font-semibold">
          <FiCalendar size={18} className="text-secondary" />
          <a
            href="https://calendar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            aria-label="Visit our calendar"
          >
            Calendar
          </a>
        </div>
        <Link
          to="/contact"
          className="bg-primary font-medium text-white px-4 py-2 text-center rounded hover:bg-accent text-base"
          aria-label="Contact Us page"
        >
          Contact Us
        </Link>
      </>
    ),
    []
  );

  const renderLinks = useCallback(
    (
      links,
      className = "block px-4 py-2 text-sm text-text hover:bg-highlight"
    ) =>
      links.map((link, index) => (
        <NavLink
          key={index}
          to={link.path}
          className={className}
          aria-label={`Navigate to ${link.title}`}
        >
          {link.title}
        </NavLink>
      )),
    []
  );

  return (
    <>
      <header className="bg-background shadow-md font-body" role="banner">
        <div className="container mx-auto flex items-center justify-between p-3 lg:p-4">
          <NavLink to="/" className="flex items-center" aria-label="Home">
            <img
              src={logo}
              alt="BICC Logo"
              className="h-12 lg:h-16 w-auto"
              title="Bangabandhu International Conference Center logo"
            />
          </NavLink>
          <div className="hidden lg:flex items-center space-x-4 text-muted text-md">
            {renderContactInfo}
          </div>
          <button
            onClick={toggleMenu}
            className="lg:hidden text-secondary"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <nav
            className="lg:hidden bg-white shadow-md border-t border-highlight"
            role="navigation"
          >
            <div className="container mx-auto flex flex-col p-4 space-y-4">
              <div className="relative">
                <button
                  onClick={toggleSubmenu}
                  className="flex items-center font-semibold text-sm font-heading text-primary"
                  aria-haspopup="true"
                  aria-expanded={submenuOpen}
                  aria-label="Toggle Explore Us submenu"
                >
                  Explore Us
                  <span className="ml-2">
                    {submenuOpen ? (
                      <FiChevronUp size={18} />
                    ) : (
                      <FiChevronDown size={18} />
                    )}
                  </span>
                </button>
                {submenuOpen && (
                  <div className="w-full bg-white shadow-lg font-semibold rounded-lg border border-highlight">
                    {renderLinks(exploreUsLinks)}
                  </div>
                )}
              </div>
              <div className="flex flex-col space-y-2 font-semibold">
                {renderLinks(
                  navLinks,
                  "text-sm font-heading text-primary hover:text-secondary transition-colors"
                )}
              </div>
              <div className="flex flex-col space-y-2 mt-4">
                {renderContactInfo}
              </div>
            </div>
          </nav>
        )}
      </header>
      <nav className="bg-primary shadow-md z-50" role="navigation">
        <div className="container mx-auto flex items-center justify-between p-4 lg:p-5">
          <NavLink to="/" className="flex items-center">
            <h1 className="font-heading text-lg md:text-xl text-white text-center md:text-start font-bold">
              Bangabandhu International Conference Center
            </h1>
          </NavLink>
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button
                onMouseEnter={handleSubmenuEnter}
                onMouseLeave={handleSubmenuLeave}
                className="flex items-center text-sm font-semibold font-heading text-white hover:text-accent transition-colors"
                aria-haspopup="true"
                aria-expanded={submenuOpen || submenuHover}
                aria-label="Explore Us submenu"
              >
                Explore Us
                <span className="ml-2">
                  {submenuOpen || submenuHover ? (
                    <FiChevronUp size={18} />
                  ) : (
                    <FiChevronDown size={18} />
                  )}
                </span>
              </button>
              {(submenuOpen || submenuHover) && (
                <div
                  onMouseEnter={handleSubmenuEnter}
                  onMouseLeave={handleSubmenuLeave}
                  className="absolute left-0 font-semibold w-48 bg-white shadow-lg rounded-lg border border-highlight"
                >
                  {renderLinks(
                    exploreUsLinks,
                    "block px-4 py-2 text-sm text-primary hover:bg-highlight font-heading"
                  )}
                </div>
              )}
            </div>
            {renderLinks(
              navLinks,
              "text-sm font-semibold font-heading text-white hover:text-accent transition-colors"
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
