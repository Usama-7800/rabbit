import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

function CartContent({ cartProducts }) {
  return (
    // <div>
    //   {cartProducts.map((product,index)=>{})}
    // </div>
    <div className="space-y-4">
      {cartProducts.map((product) => (
        <div
          key={product.productId}
          className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0"
        >
          {/* Product Image */}
          <div className="w-20 h-24 flex shrink-0 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 flex flex-col justify-between h-full min-w-0">
            <div>
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-sm font-medium text-gray-900 truncate">
                  {product.name}
                </h3>
                <span className="text-sm font-semibold text-gray-900">
                  ${product.price * product.quantity}
                </span>
              </div>

              {/* Size & Color Tags */}
              <p className="text-xs text-gray-500 mt-1">
                Size:{" "}
                <span className="font-medium text-gray-700">
                  {product.size}
                </span>{" "}
                | Color:{" "}
                <span className="font-medium text-gray-700">
                  {product.color}
                </span>
              </p>
            </div>

            {/* Quantity Stepper & Delete */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                <button className="p-1.5 text-gray-600 hover:text-black transition">
                  <FiMinus size={14} />
                </button>
                <span className="px-2 text-xs font-medium text-gray-900 w-6 text-center select-none">
                  {product.quantity}
                </span>
                <button className="p-1.5 text-gray-600 hover:text-black transition">
                  <FiPlus size={14} />
                </button>
              </div>

              {/* Remove button */}
              <button className="text-gray-400 hover:text-red-500 p-1 transition">
                <FiTrash2 size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartContent;
