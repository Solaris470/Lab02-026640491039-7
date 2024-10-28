// app/routes/root.tsx
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

export default function Root() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is logged in:', user);
        // หากผู้ใช้เข้าสู่ระบบแล้ว สามารถเปลี่ยนเส้นทางไปยัง Dashboard หรือหน้าอื่น ๆ ได้ที่นี่
        navigate('/dashboard');
      } else {
        console.log('User is logged out');
        // หากผู้ใช้ออกจากระบบ คุณอาจต้องการเปลี่ยนเส้นทางไปที่หน้า Login
        navigate('/login');
      }
    });

    // ล้างการ unsubscribe เมื่อ component จะ unmount
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <h1>Welcome to My App</h1>
    </div>
  );
}
