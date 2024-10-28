import Navbar from "./template/header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBoxOpen, faChartLine, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { auth } from '~/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Dashboard() {
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

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July',  'August', 'September', 'October',  'November', 'December'],
    datasets: [
      {
        label: 'Sales',
        data: [30, 45, 28, 60, 57, 43, 67, 47, 45, 65, 41, 39, 47],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Navbar />
      <div className="p-4 pt-16 sm:ml-64">
        <h1 className="pt-6 pl-12 pb-2 text-start text-4xl font-medium">
          Dashboard
        </h1>
        <div className="grid grid-cols-4 gap-6 mt-4 mb-8">
          <div className="max-w-ml bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
            <div className="grid grid-cols-2 gap-4">
              <p>Total User</p>
              <h2 className="text-4xl text-end"><FontAwesomeIcon icon={faUsers} /></h2>
            </div>
            <h2 className="text-4xl font-bold mb-6">6</h2>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Up from yesterday</p>
          </div>
          <div className="max-w-ml bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
            <div className="grid grid-cols-2 gap-4">
              <p>Total Task</p>
              <h2 className="text-4xl text-end"><FontAwesomeIcon icon={faBoxOpen} /></h2>
            </div>
            <h2 className="text-4xl font-bold mb-6">10</h2>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Up from yesterday</p>
          </div>
          <div className="max-w-ml bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
            <div className="grid grid-cols-2 gap-4">
              <p>Total Completed</p>
              <h2 className="text-4xl text-end"><FontAwesomeIcon icon={faChartLine} /></h2>
            </div>
            <h2 className="text-4xl font-bold mb-6">10</h2>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Up from yesterday</p>
          </div>
          <div className="max-w-ml bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
            <div className="grid grid-cols-2 gap-4">
              <p>Total Pending</p>
              <h2 className="text-4xl text-end"><FontAwesomeIcon icon={faClockRotateLeft} /></h2>
            </div>
            <h2 className="text-4xl font-bold mb-6">2</h2>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Up from yesterday</p>
          </div>
        </div>

        <div className="max-w-ml bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
        <h2 className="text-3xl font-bold mb-6">Task Compeled By Month</h2>
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
}
