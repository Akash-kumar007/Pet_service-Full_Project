import { useState } from "react";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2 no-underline">
            <img
              src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5f69b952f912e8000177e614/0x0.png"
              alt="Tailmate Logo"
              className="h-16 object-contain"
            />
            <span className="text-2xl font-bold text-yellow-400">Tailmate</span>
          </Link>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            {/* Profile icon - shown on mobile */}
            <Link to="/profileform" onClick={closeMobileMenu} className="mr-4 lg:hidden">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 16 16" 
                fill="currentColor" 
                className="w-8 h-8 text-yellow-400 hover:scale-105 transition"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path 
                  fillRule="evenodd" 
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" 
                />
              </svg>
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu and profile icon */}
          <div className="hidden lg:flex items-center gap-10">
            {/* Menu Links */}
            <div className="flex items-center space-x-10">
              <Link to="/home" onClick={closeMobileMenu} className="text-white text-lg font-semibold border-b-2 border-transparent hover:border-yellow-400 transition-all duration-200 no-underline"
              >
                Home
              </Link>
              <Link to="/aboutus" onClick={closeMobileMenu} className="text-white text-lg font-semibold border-b-2 border-transparent hover:border-yellow-400 transition-all duration-200 no-underline"
              >
                About
              </Link> 
              <Link to="/petevents" onClick={closeMobileMenu} className="text-white text-lg font-semibold border-b-2 border-transparent hover:border-yellow-400 transition-all duration-200 no-underline"
              >
                Pet Events
              </Link> 
              <Link to="/petfriendlycafs" onClick={closeMobileMenu} className="text-white text-lg font-semibold border-b-2 border-transparent hover:border-yellow-400 transition-all duration-200 no-underline"
              >
                Pet-friendly Cafés 
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-white text-lg font-semibold border-b-2 border-transparent hover:border-yellow-400 transition-all duration-200 no-underline"
                >
                  Our Services
                </button>
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 bg-gray-800 rounded-md shadow-lg z-50 w-52">
                    {[
                      { label: "Pet Ticketing", path: "/petticket" },
                      { label: "Medical Service", path: "/book-appointment" },
                      { label: "Pet Grooming", path: "/petgrooming" },
                      { label: "Buy or Sell", path: "/buysellpage" },
                      { label: "Pet Mating", path: "/petmating" },
                    ].map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={closeMobileMenu}
                        className="block px-4 py-2 text-white hover:bg-yellow-500 no-underline"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/contact" onClick={closeMobileMenu} className="text-white text-lg font-semibold border-b-2 border-transparent hover:border-yellow-400 transition-all duration-200 no-underline"
              >
                Contact
              </Link>
            </div>

            {/* Profile icon - centered in desktop view */}
            <div className="flex justify-center">
              <Link to="/profileform" onClick={closeMobileMenu} className="ml-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 16 16" 
                  fill="currentColor" 
                  className="w-8 h-8 text-yellow-400 hover:scale-105 transition"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path 
                    fillRule="evenodd" 
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" 
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isOpen ? "flex flex-col gap-4 pb-4" : "hidden"
          } lg:hidden`}
        >
          <Link to="/home" onClick={closeMobileMenu} className="text-white text-lg font-semibold border-b-2 border-transparent hover:border-yellow-400 transition-all duration-200 no-underline"
          >
            Home
          </Link>
          <Link to="/aboutus" onClick={closeMobileMenu} className="text-white text-lg font-semibold border-b-2 border-transparent hover:border-yellow-400 transition-all duration-200 no-underline"
          >
            About
          </Link> 
          <Link to="/petevents" onClick={closeMobileMenu} className="text-white text-lg font-semibold border-b-2 border-transparent hover:border-yellow-400 transition-all duration-200 no-underline"
          >
            Pet Events
          </Link> 
          <Link to="/petfriendlycafs" onClick={closeMobileMenu} className="text-white text-lg font-semibold border-b-2 border-transparent hover:border-yellow-400 transition-all duration-200 no-underline"
          >
            Pet-friendly Cafés 
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-white text-lg font-semibold border-b-2 border-transparent hover:border-yellow-400 transition-all duration-200 no-underline"
            >
              Our Services
            </button>
            {isServicesOpen && (
              <div className="mt-2 bg-gray-800 rounded-md shadow-lg z-50 w-full">
                {[
                  { label: "Pet Ticketing", path: "/petticket" },
                  { label: "Medical Service", path: "/book-appointment" },
                  { label: "Pet Grooming", path: "/petgrooming" },
                  { label: "Buy or Sell", path: "/buysellpage" },
                  { label: "Pet Mating", path: "/petmating" },
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className="block px-4 py-2 text-white hover:bg-yellow-500 no-underline"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" onClick={closeMobileMenu} className="text-white text-lg font-semibold border-b-2 border-transparent hover:border-yellow-400 transition-all duration-200 no-underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;