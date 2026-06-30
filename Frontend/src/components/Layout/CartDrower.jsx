import { IoMdClose } from "react-icons/io";
import CartContent from "../Cart/CartContent";

export default function CartDrower({ drawerOpen, toggleCartDrawer ,cartProducts}) {
 
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-2/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* close button  */}
      <div className="flex justify-end p-4 border- border-gray-200 shadow-md">
        <button
          onClick={toggleCartDrawer}
          className="  flex items- justify-between w-full items-center "
        >
          <h2 className="text-xl font-semibold">Cart</h2>
          <IoMdClose size={24} className="text-gray-900 cursor-pointer" />
        </button>
      </div>
      {/* cart content scrollable area  */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* <div      */}
        {/* component for cart content   */}
        <CartContent cartProducts={cartProducts} />
      </div>
      {/* checkout button that fixed below */}
      <div className="p-4 bg-white sticky bottom-0">
        <button className="bg-black w-full text-white py-3 rounded-lg font font-semibold hover:bg-gray-800 transition">
          Checkout
        </button>
        <p className="text-sm text-gray-500 tracking-tighter mt-2 text-center">
          Shipping, taxes, and discount codes calculated at checkout.
        </p>
      </div>
    </div>
  );
}
