// app/routes/logout.tsx
import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '~/firebaseConfig';
import Navbar from "./template/header";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await signOut(auth);
        // นำทางไปยังหน้า Login หลังจากออกจากระบบสำเร็จ
        setTimeout(() => {
        navigate('/')
      }, 1000);
      } catch (err) {
        console.error('Logout error:', err);
      }
    };

    handleLogout();
  }, [navigate]);

  return (
    <>
      <div className="flex justify-center pt-64">
        
        <h1 className="text-2xl font-bold">Logging out...</h1>
      </div>
    </>
  );
}
