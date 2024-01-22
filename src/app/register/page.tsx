'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import * as React from 'react';

export default function Register() {
    const router = useRouter();
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleRegister = async () => {
        // Logika registrasi dapat ditambahkan di sini
        console.log('Registrasi dengan email:', email, 'dan password:', password);
        try {
            const response = await axios.post('http://localhost:7070/auth/regis', { username, email, password });
            console.log('Response from server:', response.data);
            // Handle success, redirect, or show a success message
            alert("Register success")
            router.push("/");
        } catch (error: any) {
            console.error('Error during registration:', error.response?.data || error.message);
            // Handle error, show an error message, etc.
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-100 p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">Registrasi</h2>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password
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
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    onClick={handleRegister}
                >
                    Daftar
                </button>
            </div>
        </div>
    );
}
