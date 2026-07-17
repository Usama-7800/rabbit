import { Link } from "react-router-dom";

const stats = [
    { label: 'Revenue', value: '$319.94' },
    { label: 'Total Orders', value: '4', link: 'admin/orders' },
    { label: 'Total Products', value: '40', link: 'admin/products' },
];
const orders = [
    {
        _id: '67540ced3376121b361a0ed0',
        user: {
            name: 'John Doe',
            role: 'Admin'
        },
        totalPrice: '$199.96',
        status: 'Delivered',
    },
    {
        _id: '67540d3ca67b4a70e434e092',
        user: {
            name: 'John Doe',
            role: 'Admin'
        },
        totalPrice: '$40',
        status: 'Processing',
    },
    {
        _id: '675bf2c6ca77bd83eefd7a18',
        user: {
            name: 'John Doe',
            role: 'Admin'
        },
        totalPrice: '$39.99',
        status: 'Processing',
    },
    {
        _id: '675c24b09b88827304bd5cc1',
        user: {
            name: 'John Doe',
            role: 'Admin'
        },
        totalPrice: '$39.99',
        status: 'Processing',
    },
];
export default function AdminHomePage() {
    return (
        <div className="min-h-screen     font-sans">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-white p-6 rounded-lg shadow-sm flex flex-col space-y-2"
                        >
                            <div className="text-sm text-gray-500">{stat.label}</div>
                            <div className="text-3xl font-bold">{stat.value}</div>
                            {stat.link && (
                                <Link
                                    to={stat.link}
                                    className="text-sm text-blue-600 hover:underline mt-auto "
                                >
                                    Manage{' '}
                                    {stat.label.includes('Orders') ? 'Orders' : 'Products'}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {orders.length > 0 ?
                    <>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
                            <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-200 border-b border-gray-200">
                                        <tr>
                                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                ORDER ID
                                            </th>
                                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                Name/User
                                            </th>
                                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                Role
                                            </th>
                                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                TOTAL PRICE
                                            </th>
                                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                STATUS
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {orders.map((order) => (
                                            <tr key={order._id}>
                                                <td className="px-6 py-5 text-sm text-gray-900 font-mono">
                                                    {order._id}
                                                </td>
                                                <td className="px-6 py-5 text-sm text-gray-600">
                                                    {order.user.name}
                                                </td>
                                                <td className="px-6 py-5 text-sm text-gray-600">
                                                    {order.user.role}
                                                </td>
                                                <td className="px-6 py-5 text-sm text-gray-900">
                                                    {order.totalPrice}
                                                </td>
                                                <td className="px-6 py-5 text-sm">
                                                    <span
                                                        className={`font-medium ${order.status === 'Delivered'
                                                            ? 'text-green-700'
                                                            : 'text-gray-600'
                                                            }`}
                                                    >
                                                        {order.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                    :
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                        <h2 className="text-xl font-bold mb-4">No Orders Yet</h2>
                        <p className="text-gray-600">There are no orders to display at the moment.</p>
                    </div>}
                {/* Recent Orders Section */}

            </div>
        </div>
    );
}
