
import { useState } from 'react';

export default function UserManagement() {
    const [users, setUsers] = useState([
        { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'Admin' },
    ]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'Customer',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleAddUser = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.password) {
            return; // Basic validation matching the HTML5 validation shown in the screenshot
        }

        const newUser = {
            id: Date.now(),
            name: formData.name,
            email: formData.email,
            role: formData.role,
        };

        setUsers((prev) => [...prev, newUser]);
        setFormData({ name: '', email: '', password: '', role: 'Customer' });
    };

    const handleRoleChange = (id, newRole) => {
        setUsers((prev) =>
            prev.map((user) => (user.id === id ? { ...user, role: newRole } : user))
        );
    };

    const handleDeleteUser = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {

            setUsers((prev) => prev.filter((user) => user.id !== id));
        }
    };

    return (
        <div className="min-h-screen   font-sans text-gray-900 max-w-7xl mx-auto">
            {/* Page Title */}
            <h1 className="text-2xl font-bold mb-8">User Management</h1>

            {/* Form Section */}
            <div className="mb-12">
                <h2 className="text-lg font-bold mb-4">Add New User</h2>
                <form onSubmit={handleAddUser} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full border border-gray-200 rounded-md p-2.5 focus:outline-none focus:ring-1 focus:ring-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full border border-gray-200 rounded-md p-2.5 focus:outline-none focus:ring-1 focus:ring-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            required
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full border border-gray-200 rounded-md p-2.5 focus:outline-none focus:ring-1 focus:ring-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Role
                        </label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                            className="w-full border border-gray-200 rounded-md p-2.5 focus:outline-none focus:ring-1 focus:ring-gray-300 bg-white"
                        >
                            <option value="Customer">Customer</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-medium px-5 py-2.5 rounded-md transition-colors"
                        >
                            Add User
                        </button>
                    </div>
                </form>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#f1f5f9] text-[11px] font-bold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Email</th>
                            <th className="px-6 py-4">Role</th>
                            <th className="px-6 py-4 text-right pr-12">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50/50">
                                <td className="px-6 py-4 font-semibold text-gray-900">
                                    {user.name}
                                </td>
                                <td className="px-6 py-4 text-gray-500">{user.email}</td>
                                <td className="px-6 py-4">
                                    <select
                                        value={user.role}
                                        onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                        className="border border-gray-200 rounded px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-gray-300"
                                    >
                                        <option value="Admin">Admin</option>
                                        <option value="Customer">Customer</option>
                                    </select>
                                </td>
                                <td className="px-6 py-4 text-right pr-12">
                                    <button
                                        onClick={() => handleDeleteUser(user.id)}
                                        className="bg-[#ef4444] hover:bg-[#dc2626] text-white px-5 py-2 rounded text-sm transition-colors"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {users.length === 0 && (
                            <tr>
                                <td colSpan="4" className="text-center py-8 text-gray-400">
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}