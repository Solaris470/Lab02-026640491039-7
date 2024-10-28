// app/routes/signup.tsx
import type { MetaFunction } from "@remix-run/node";
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '~/firebaseConfig';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export const meta: MetaFunction = () => {
  return [
    { title: "Sign Up" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const db = getFirestore();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        fullname: fullname,
        email: user.email,
        createdAt: new Date().toISOString(),
      });

      alert('Registration successful!');
      navigate('/dashboard');
    } catch (err) {
      const errorMessage = (err as Error).message; 
      console.error("Error adding document: ", errorMessage);
      setError(errorMessage);
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <input
              type="fullname"
              placeholder="Fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
              className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>
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
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">Already have an account? <a href="/login" className="text-green-500 hover:underline">Login</a></p>
        </div>
      </div>
    </div>
  );
}
