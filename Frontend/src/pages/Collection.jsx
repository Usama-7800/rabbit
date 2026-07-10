import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa6";
import FilterSideBar from "./FilterSideBar";
import SortOptions from "../components/Products/SortOptions";
import ProductsGrid from "../components/Products/ProductGrid";

export default function Collection() {
  const [products, setProducts] = useState([]);
  const [isSidbarOpen, SetIsSidbarOpen] = useState(false);

  const SideBarRef = useRef(null);

  const toggleSidebar = () => {
    SetIsSidbarOpen(!isSidbarOpen);
  };
  const handleClickOutside = (e) => {
    if (SideBarRef.current && !SideBarRef.current.contains(e.target)) {
      SetIsSidbarOpen(false);
    }
  };
  useEffect(() => {
    // add event listener to detect clicks outside the sidebar
    document.addEventListener("mousedown", handleClickOutside);
    // clean event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // console.log(products);
  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: "1",
          name: "Classic Denim Jacket",
          price: "79.99",
          images: [
            {
              url: "https://picsum.photos/500/500?random=1",
              altText: "Classic Denim Jacket Front View",
            },
          ],
        },
        {
          _id: "2",
          name: "Crewneck Cotton Sweatshirt",
          price: "45.00",
          images: [
            {
              url: "https://picsum.photos/500/500?random=2",
              altText: "Crewneck Cotton Sweatshirt Flat Lay",
            },
          ],
        },
        {
          _id: "3",
          name: "Slim-Fit Chino Pants",
          price: "59.95",
          images: [
            {
              url: "https://picsum.photos/500/500?random=3",
              altText: "Slim-Fit Chino Pants Side Profile",
            },
          ],
        },
        {
          _id: "4",
          name: "Oversized Linen Shirt",
          price: "39.99",
          images: [
            {
              url: "https://picsum.photos/500/500?random=4",
              altText: "Oversized Linen Shirt Hanging View",
            },
          ],
        },
        {
          _id: "5",
          name: "Minimalist Leather Sneakers",
          price: "120.00",
          images: [
            {
              url: "https://picsum.photos/500/500?random=5",
              altText: "Minimalist Leather Sneakers Studio Shot",
            },
          ],
        },
        {
          _id: "6",
          name: "Minimalist Leather Sneakers",
          price: "120.00",
          images: [
            {
              url: "https://picsum.photos/500/500?random=6",
              altText: "Minimalist Leather Sneakers Studio Shot",
            },
          ],
        },
        {
          _id: "7",
          name: "Minimalist Leather Sneakers",
          price: "120.00",
          images: [
            {
              url: "https://picsum.photos/500/500?random=7",
              altText: "Minimalist Leather Sneakers Studio Shot",
            },
          ],
        },
        {
          _id: "8",
          name: "Minimalist Leather Sneakers",
          price: "120.00",
          images: [
            {
              url: "https://picsum.photos/500/500?random=8",
              altText: "Minimalist Leather Sneakers Studio Shot",
            },
          ],
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col lg:flex-row ">
      {/* mobile filter button  */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden  border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" />
      </button>
      {/* filter side bar  */}
      <div
        // className={`  fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static translate-x-0 ${isSidbarOpen ? "translate-x-0" : "-translate-x-full"}`}
        // ✅ FIXED: Aakhir mein 'lg:translate-x-0' kar diya hai aur dynamic classes ko end mein rakha hai
        className={`fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 border-r border-gray-100 lg:static lg:translate-x-0 ${
          isSidbarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        ref={SideBarRef}
      >
        <FilterSideBar />
      </div>
      <div className=" grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>
        {/* sort options  */}
        <SortOptions />

        {/* products grid  */}
        <ProductsGrid products={products} />
      </div>
    </div>
  );
}
