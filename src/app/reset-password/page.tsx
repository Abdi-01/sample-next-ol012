'use client'
import axios from 'axios';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import * as React from 'react';

export default function ResetPassword() {
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const searcParams = useSearchParams();
    const handleResetPassword = async () => {
        const token = searcParams.get("tkn");
        try {
            console.log(token);

            if (token) {
                const response = await axios.patch('http://localhost:7070/auth/reset', { password, confirmPassword }, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                console.log('Response from server:', response.data);
                alert("Reset password success")
            } else {
                alert("Token not found")
            }
            // Handle success, redirect, or show a success message
        } catch (error: any) {
            console.error('Error during registration:', error.response?.data || error.message);
            // Handle error, show an error message, etc.
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-100 p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        New Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    onClick={handleResetPassword}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
