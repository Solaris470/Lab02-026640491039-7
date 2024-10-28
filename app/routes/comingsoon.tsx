import Navbar from "./template/header";
import { auth } from '~/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

export default function ComingSoon() {
  const navigate = useNavigate();

  // Authentication check
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) {
        navigate('/login'); // Redirect to login if not authenticated
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, [navigate]);
  
  return (
    <>
      <Navbar />
      <div className="flex justify-center pt-64">
      <img
        src="https://media0.giphy.com/media/E0Ecgb6Dhve3v5eb9g/giphy.gif?cid=6c09b9520evom2dxqva6diba12smu54blu2t8s3pe74h212g&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
        alt=""
      />
      </div>
    </>
  );
}