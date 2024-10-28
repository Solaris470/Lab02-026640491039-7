import type { MetaFunction } from "@remix-run/node";
import Navbar from "./template/header"; // ใช้ Navbar ถ้าคุณต้องการ
import { Link } from 'react-router-dom'; // ใช้ Link แทน a สำหรับการนำทาง

export const meta: MetaFunction = () => {
  return [
    { title: "Welcome to My App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to My App</h1>
        <div className="flex flex-col space-y-4">
          <Link to="/login">
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-200">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
