import React, { useState } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#D4AF37] text-black font-sans">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl italic font-medium">Logo Or Name</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center font-semibold">
          <a href="#" className="hover:underline">
            HOME
          </a>

          <div className="relative">
            <button
              onClick={() => {
                setShowProducts(!showProducts);
                setShowServices(false);
              }}
              className="flex items-center space-x-1 hover:underline"
            >
              <span>PRODUCTS</span>
              <FiChevronDown />
            </button>
            {showProducts && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-white text-black rounded shadow z-10">
                <a className="block px-4 py-2 hover:bg-yellow-100" href="#">
                  Photo Frame
                </a>
                <a className="block px-4 py-2 hover:bg-yellow-100" href="#">
                  Photo Mug
                </a>
                <a className="block px-4 py-2 hover:bg-yellow-100" href="#">
                  Wall Frame
                </a>
                <a className="block px-4 py-2 hover:bg-yellow-100" href="#">
                  Canvas Print
                </a>
                <a className="block px-4 py-2 hover:bg-yellow-100" href="#">
                  Gift Items
                </a>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => {
                setShowServices(!showServices);
                setShowProducts(false);
              }}
              className="flex items-center space-x-1 hover:underline"
            >
              <span>SERVICES</span>
              <FiChevronDown />
            </button>
            {showServices && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-white text-black rounded shadow z-10">
                <a className="block px-4 py-2 hover:bg-yellow-100" href="#">
                  Custom Framing
                </a>
                <a className="block px-4 py-2 hover:bg-yellow-100" href="#">
                  Design Help
                </a>
                <a className="block px-4 py-2 hover:bg-yellow-100" href="#">
                  Bulk Orders
                </a>
                <a className="block px-4 py-2 hover:bg-yellow-100" href="#">
                  Delivery
                </a>
                <a className="block px-4 py-2 hover:bg-yellow-100" href="#">
                  Installation
                </a>
              </div>
            )}
          </div>

          <a href="#" className="hover:underline">
            BLOGS
          </a>
        </div>

        {/* Search + Cart */}
        {/* Search + Cart */}
        <div className="flex items-center space-x-4">
          <div className="relative block w-full max-w-[150px]">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded-full bg-yellow-400 text-black placeholder-black focus:outline-none w-full"
            />
            <FiSearch className="absolute left-3 top-2.5 text-black" />
          </div>

          <div className="flex items-center space-x-1 cursor-pointer hover:underline">
            <span className="hidden sm:block">CART</span>
            <FiShoppingCart />
          </div>

          {/* Mobile menu icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-yellow-600 px-4 py-2 space-y-2 font-semibold">
          <a href="#" className="block">
            HOME
          </a>

          <div>
            <button
              onClick={() => setShowProducts(!showProducts)}
              className="flex items-center justify-between w-full"
            >
              PRODUCTS <FiChevronDown />
            </button>
            {showProducts && (
              <div className="ml-4 mt-1 space-y-1 text-sm">
                <a href="#">Photo Frame</a> <br />
                <a href="#">Photo Mug</a> <br />
                <a href="#">Wall Frame</a> <br />
                <a href="#">Canvas Print</a> <br />
                <a href="#">Gift Items</a>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setShowServices(!showServices)}
              className="flex items-center justify-between w-full"
            >
              SERVICES <FiChevronDown />
            </button>
            {showServices && (
              <div className="ml-4 mt-1 space-y-1 text-sm">
                <a href="#">Custom Framing</a> <br />
                <a href="#">Design Help</a> <br />
                <a href="#">Bulk Orders</a> <br />
                <a href="#">Delivery</a> <br />
                <a href="#">Installation</a>
              </div>
            )}
          </div>

          <a href="#" className="block">
            BLOGS
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
