import { Link, NavLink } from "react-router-dom";
import { FiUser, FiShoppingBag } from "react-icons/fi";
import { HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrower from "../Layout/CartDrower";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const cartProducts = [
  {
    productId: 1,
    name: "T-shirt",
    size: "M",
    color: "Red",
    quantity: 1,
    price: 15,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500",
  },
  {
    productId: 2,
    name: "Hoodie",
    size: "L",
    color: "Black",
    quantity: 2,
    price: 45,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
  },
  {
    productId: 3,
    name: "Running Shoes",
    size: "10",
    color: "White/Blue",
    quantity: 1,
    price: 85,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    productId: 4,
    name: "Baseball Cap",
    size: "One Size",
    color: "Navy",
    quantity: 1,
    price: 20,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500",
  },
  {
    productId: 5,
    name: "Sneakers",
    size: "9",
    color: "Gray",
    quantity: 1,
    price: 120,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500",
  },
];
export default function Navbar() {
  // Navigation Links configuration
  const navLinks = [
    // { name: "MEN", path: "/men" },
    { name: "MEN", path: "/collections/all" },
    { name: "WOMEN", path: "/women" },
    { name: "TOP WEAR", path: "/top-wear" },
    { name: "BOTTOM WEAR", path: "/bottom-wear" },
  ];
  // states
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navMenu, setNavMenu] = useState(false);

  // functions
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const toggleNavMenu = () => {
    setNavMenu(!navMenu);
  };
  return (
    <>
      <nav className="w-full bg-white font-sans tracking-wide">
        <div className="max-w-7xl mx-auto h-16 px-4 md:px-8 flex items-center justify-between relative">
          {/* Left Side: rabbit-red Logo */}
          <div className="flex shrink-0">
            <Link
              to="/"
              className="text-xl font-bold text-gray-900 tracking-normal"
            >
              Rabbit
            </Link>
          </div>

          {/* Center: Navigation Links */}
          {/* Hidden on small mobile screens, perfectly aligned on desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                text-[11px] font-semibold transition-colors duration-200 py-2
                ${isActive ? "text-rabbit-red" : "text-gray-700 hover:text-rabbit-red"}
              `}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Side: Action Icons */}
          <div className="flex items-center gap-4 text-gray-800">
            <Link
              to="/admin"
              className="block bg-black px-2 py-0.5 rounded text-sm text-white"
            >Admin
            </Link>
            <Link
              to="/profile"
              className="p-1 hover:text-rabbit-red transition-colors"
              aria-label="Profile"
            >
              <FiUser size={20} strokeWidth={1.8} />
            </Link>
            <button
              className="p-1 hover:text-rabbit-red transition-colors relative inline-block"
              aria-label="Shopping Bag"
              onClick={toggleCartDrawer}
            >
              <FiShoppingBag size={19} strokeWidth={1.8} />

              {/* Badge Element */}
              {cartProducts.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-rabbit-red text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full z-10">
                  {cartProducts.length}
                </span>
              )}
            </button>

            {/* serach  */}
            <div className="overflow-hidden">
              <SearchBar />
            </div>
            <button
              className="p-1 hover:text-rabbit-red transition-colors cursor-pointer block md:hidden"
              aria-label="Menu"
              onClick={toggleNavMenu}
            >
              <HiBars3BottomRight size={19} strokeWidth={0.5} />
            </button>
          </div>
        </div>
      </nav>
      <CartDrower
        drawerOpen={drawerOpen}
        toggleCartDrawer={toggleCartDrawer}
        cartProducts={cartProducts}
      />
      {/* mobile navigation menu  */}
      {/* {navMenu && (
        <div className="md:hidden bg-white border-t border-gray-200 transition-transform duration-300 ">
          <div className="px-4 py-2">
            <Link to="/products" className="block py-2 text-gray-800 hover:text-rabbit-red transition-colors">
              Products
            </Link>
            <Link to="/about" className="block py-2 text-gray-800 hover:text-rabbit-red transition-colors">
              About
            </Link>
            <Link to="/contact" className="block py-2 text-gray-800 hover:text-rabbit-red transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )} */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navMenu ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleNavMenu}
            className="flex items-center justify-center w-8 h-8   transition-colors"
          >
            <IoMdClose size={24} className="text-gray-900 cursor-pointer" />
          </button>
        </div>
        <div className="px-4 py-2">
          <h2>Menu</h2>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                text-[11px] font-semibold transition-colors duration-200 py-2
                ${isActive ? "text-rabbit-red" : "text-gray-700 hover:text-rabbit-red"}
              `}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
