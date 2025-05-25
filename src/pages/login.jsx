import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (data.success) {
  
localStorage.setItem('isAdmin', 'true');

            navigate('/admin');

        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Login</h1>
            <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="border p-2 mb-2 block" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 mb-4 block" />
            <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2">Login</button>
        </div>
    );
}

export default Login;
