import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const quickLinks = useMemo(
    () => (
      <>
        <NavLink
          to="/"
          className="text-muted mb-2 hover:text-accent transition-lg font-semibold text-base"
          aria-label="Home"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="text-muted mb-2 hover:text-accent transition-lg font-semibold text-base"
          aria-label="About Us"
        >
          About Us
        </NavLink>
        <NavLink
          to="/booking"
          className="text-muted mb-2 hover:text-accent transition-lg font-semibold text-base"
          aria-label="Booking"
        >
          Booking
        </NavLink>
        <NavLink
          to="/catering"
          className="text-muted mb-2 hover:text-accent transition-lg font-semibold text-base"
          aria-label="Services"
        >
          Catering
        </NavLink>
        <NavLink
          to="/restaurant"
          className="text-muted mb-2 hover:text-accent transition-lg font-semibold text-base"
          aria-label="Services"
        >
          Restaurant
        </NavLink>
        <NavLink
          to="/event"
          className="text-muted mb-2 hover:text-accent transition-lg font-semibold text-base"
          aria-label="Events"
        >
          Events
        </NavLink>
        <NavLink
          to="/contact"
          className="text-muted mb-2 hover:text-accent transition-lg font-semibold text-base"
          aria-label="Contact Us"
        >
          Contact Us
        </NavLink>
      </>
    ),
    []
  );

  const contactInfo = useMemo(
    () => (
      <>
        <p className="text-muted mb-2 font-semibold text-base">
          Agargaon, Sher-E-Bangla Nagar, Dhaka-1207, Bangladesh
        </p>
        <p className="text-muted mb-2 font-semibold text-base">
          Phone: +8801755636335, +8801755636336, +8801755636337
        </p>
        <p className="text-muted mb-2 font-semibold text-base">
          Email: info@bicc-bd.com
        </p>
        <div className="flex space-x-4 mt-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="Facebook"
          >
            <FiFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="Twitter"
          >
            <FiTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="Instagram"
          >
            <FiInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={24} />
          </a>
        </div>
      </>
    ),
    []
  );

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 p-3 lg:p-4">
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start">
          <NavLink to="/" className="mb-4" aria-label="Home">
            <img
              src="https://bicc-bd.com/assets/bicc%20logo-DdXhtPN2.png"
              alt="BICC Logo"
              title="bicc logo"
              className="h-20 w-auto bg-background p-1 bg-opacity-70 rounded"
            />
          </NavLink>
          <div className="text-muted text-center md:text-left">
            <h2 className="font-heading text-muted font-semibold text-lg">
              Bangabandhu International Conference Center (BICC)
            </h2>
            <p>
              Managed and Operated By: <br />
              <a
                href="https://www.x-grouprestaurant.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="X-group"
              >
                X-group Chain Restaurant And Hospitality Management
              </a>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-title text-muted font-bold text-xl mb-6 text-center md:text-left">
            Quick Links
          </h2>
          {quickLinks}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-title text-muted font-bold text-xl mb-6 text-center md:text-left">
            Contact Us
          </h2>
          {contactInfo}
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-title text-muted font-bold text-xl mb-6 text-center md:text-left">
            Newsletter
          </h2>
          <p className="text-muted mb-6 text-center md:text-left text-base font-semibold">
            Subscribe to our newsletter to get the latest updates.
          </p>
          <form
            className="w-full"
            aria-label="Newsletter Subscription"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              className="w-full p-3 mb-4 bg-background text-primary rounded border border-muted focus:outline-none focus:ring-2 focus:ring-accent"
              required
              aria-required="true"
            />
            <button
              type="submit"
              className="w-full p-3 bg-accent font-semibold text-white rounded hover:bg-highlight hover:text-text transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-muted mt-12 pt-6 text-center text-muted text-lg font-semibold">
        © {currentYear} Bangabandhu International Conference Center. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
