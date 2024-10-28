// app/routes/login.tsx
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '~/firebaseConfig';
import { useNavigate } from "react-router-dom";
import { MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: "Login" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
      navigate('/dashboard');
    } catch (err) {
      const errorMessage = (err as Error).message; 
      setError(errorMessage);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>
          <button 
            type="submit" 
            className="bg-green-500 text-white py-2 rounded w-full hover:bg-green-600 transition duration-200">
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">Don't have an account? <a href="/signup" className="text-green-500 hover:underline">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}
