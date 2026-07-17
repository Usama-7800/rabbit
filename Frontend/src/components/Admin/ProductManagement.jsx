
// export default function ProductManagement() {
//   return (
//     <div>
//       ProductManagement
//     </div>
//   )
// }
import { useState } from 'react';
import { Link } from 'react-router-dom';

const initialProducts = [
    { _id: '123451', name: 'Printed Resort Shirt', price: '$29.99', sku: 'PRNT-RES-004' },
    { _id: '123452', name: 'Chino Pants', price: '$55', sku: 'BW-005' },
    { _id: '123453', name: 'Cargo Pants', price: '$50', sku: 'BW-008' },
    { _id: '123454', name: 'Long-Sleeve Thermal Tee', price: '$27.99', sku: 'LST-THR-009' },
    { _id: '123455', name: 'Pleated Midi Skirt', price: '$55', sku: 'BW-W-004' },
    { _id: '123456', name: 'Graphic Print Tee', price: '$30', sku: 'TW-W-006' },
    { _id: '123457', name: 'Ribbed Long-Sleeve Top', price: '$55', sku: 'TW-W-007' },
    { _id: '123458', name: 'Slim-Fit Stretch Shirt', price: '$29.99', sku: 'SLIM-SH-002' },
    { _id: '123459', name: 'Cargo Joggers', price: '$45', sku: 'BW-002' },
    { _id: '123460', name: 'Off-Shoulder Top', price: '$45', sku: 'TW-W-004' }
];

export default function ProductManagement() {
    const [products, setProducts] = useState(initialProducts);

    // const handleEdit = (sku) => {
    //     // Action handler placeholder
    //     console.log(`Edit product with SKU: ${sku}`);
    // };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {

            setProducts(products.filter(product => product._id !== id));
        }
    };

    return (
        <div className="bg-white min-h-screen p-8 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Product Management</h1>

                {/* Table Container */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#f8fafc] text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200/80">
                                <th className="px-6 py-4.5">ID</th>
                                <th className="px-6 py-4.5">Name</th>
                                <th className="px-6 py-4.5">Price</th>
                                <th className="px-6 py-4.5">Sku</th>
                                <th className="px-6 py-4.5 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {products.length > 0 ? (
                                products.map((product) => (
                                    <tr key={product.sku} className="hover:bg-gray-50/40 transition-colors">
                                        {/* Product Name */}
                                        <td className="px-6 py-4.5 font-semibold text-gray-900 text-[15px]">
                                            {product._id}
                                        </td>
                                        <td className="px-6 py-4.5 font-semibold text-gray-900 text-[15px]">
                                            {product.name}
                                        </td>

                                        {/* Price */}
                                        <td className="px-6 py-4.5 text-gray-500 text-[15px]">
                                            {product.price}
                                        </td>

                                        {/* SKU */}
                                        <td className="px-6 py-4.5 text-gray-400 font-mono text-[13px] tracking-wider">
                                            {product.sku}
                                        </td>

                                        {/* Actions */}
                                        <td className="px-6 py-4.5">
                                            <div className="flex items-center justify-center space-x-2">
                                                {/* <button
                                                    onClick={() => handleEdit(product.sku)}
                                                    className="bg-[#eab308] hover:bg-[#ca8a04] text-white text-[13px] font-medium px-4 py-1.5 rounded transition-colors duration-150"
                                                >
                                                    Edit
                                                </button> */}
                                                <Link to={`/admin/products/${product._id}/edit`}
                                                    className="bg-[#eab308] hover:bg-[#ca8a04] text-white text-[13px] font-medium px-4 py-1.5 rounded transition-colors duration-150"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(product._id)}
                                                    className="bg-[#ef4444] hover:bg-[#dc2626] text-white text-[13px] font-medium px-4 py-1.5 rounded transition-colors duration-150"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : <tr>
                                <td colSpan="5" className="px-6 py-4.5 text-center text-gray-500">
                                    <h2>Products not found</h2>
                                    <p>Please add some products to get started.</p>
                                </td>
                            </tr>}
                        </tbody>
                    </table>
                </div>
            </div >
        </div >
    );
}