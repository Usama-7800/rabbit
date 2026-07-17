import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyorderPage() {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            const mockOrders = [
                {
                    _id: "ORD65432",
                    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
                    ShippingAddress: {
                        city: "New York",
                        country: "USA",
                    },
                    orderItems: [
                        {
                            name: "Wireless Noise-Canceling Headphones",
                            image: "https://picsum.photos/500/500?random=1",
                            quantity: 1,
                            price: 199,
                        },
                    ],
                    totalPrice: 199,
                    isPaid: true,
                    isDelivered: false,
                },
                {
                    _id: "ORD98765",
                    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
                    ShippingAddress: {
                        city: "London",
                        country: "UK",
                    },
                    orderItems: [
                        {
                            name: "Ergonomic Mechanical Keyboard",
                            image: "https://picsum.photos/500/500?random=2",
                            quantity: 1,
                            price: 120,
                        },
                        {
                            name: "Wireless Gaming Mouse",
                            image: "https://picsum.photos/500/500?random=3",
                            quantity: 1,
                            price: 60,
                        },
                    ],
                    totalPrice: 180,
                    isPaid: true,
                    isDelivered: true,
                    deliveredAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
                },
                {
                    _id: "ORD12345",
                    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
                    ShippingAddress: {
                        city: "Tokyo",
                        country: "Japan",
                    },
                    orderItems: [
                        {
                            name: "Leather Minimalist Wallet",
                            image: "https://picsum.photos/500/500?random=4",
                            quantity: 2,
                            price: 45,
                        },
                    ],
                    totalPrice: 90,
                    isPaid: false,
                    isDelivered: false,
                },
                {
                    _id: "ORD45678",
                    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
                    ShippingAddress: {
                        city: "Berlin",
                        country: "Germany",
                    },
                    orderItems: [
                        {
                            name: "Stainless Steel Water Bottle",
                            image: "https://picsum.photos/500/500?random=5",
                            quantity: 1,
                            price: 35,
                        },
                        {
                            name: "Canvas Travel Backpack",
                            image: "https://picsum.photos/500/500?random=6",
                            quantity: 1,
                            price: 85,
                        },
                    ],
                    totalPrice: 120,
                    isPaid: true,
                    isDelivered: true,
                    deliveredAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
                },
            ];
            setOrders(mockOrders);
        }, 1000);
    }, []);
    // () => navigate(`/order/${order._id}`)
    const handleRowClick = (orderId) => {
        navigate(`/order/${orderId}`);
    }
    return <div className="max-w-7xl mx-auto p-4 sm:px-6 ">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
        <div className="relative shadow-md rounded-lg overflow-hidden ">
            <table className="min-w-full text-left text-gray-500">
                <thead className="bg-gray-100 text-gray-700 text-xs uppercase">
                    <tr>
                        <th className="py-2 px-4 sm:py-3">IMAGE</th>
                        <th className="py-2 px-4 sm:py-3">ORDER ID</th>
                        <th className="py-2 px-4 sm:py-3">CREATED</th>
                        <th className="py-2 px-4 sm:py-3">SHIPPING ADDRESS</th>
                        <th className="py-2 px-4 sm:py-3">ITEMS</th>
                        <th className="py-2 px-4 sm:py-3">PRICE</th>
                        <th className="py-2 px-4 sm:py-3">STATUS</th>
                    </tr>
                </thead>
                <tbody className="">
                    {orders.length > 0 ?
                        orders.map((order) => (
                            <tr key={order._id} onClick={()=>handleRowClick(order._id)} className="bg-white border-b hover:bg-rabbit-red/20 cursor-pointer ">
                                <td className="py-2 px-2 sm:py-4 sm:px-4">
                                    <img src={order.orderItems[0].image} alt={order.orderItems[0].name} className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg" />
                                </td>
                                <td className="py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap">#{order._id}</td>
                                <td className="py-2 px-2 sm:py-4 sm:px-4">
                                    {new Date(order.createdAt).toLocaleDateString()}
                                    {new Date(order.createdAt).toLocaleTimeString()}
                                </td>
                                <td className="py-2 px-2 sm:py-4 sm:px-4">
                                    {order.ShippingAddress ? `${order.ShippingAddress.city}, ${order.ShippingAddress.country}` : "N/A"}
                                </td>
                                <td className="py-2 px-2 sm:py-4 sm:px-4">{order.orderItems.length}</td>
                                <td className="py-2 px-2 sm:py-4 sm:px-4">${order.totalPrice.toFixed(2)}</td>
                                <td className="py-2 px-2 sm:py-4 sm:px-4">
                                    <span className={`${order.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-7 00"} px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}>${order.isPaid ? "Paid" : "Pending"}</span>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="7" className="py-4 px-4 text-center text-gray-500">
                                    You have no orders yet
                                </td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>

    </div>;
}
