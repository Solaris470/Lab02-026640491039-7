import Navbar from "./template/header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBoxOpen, faChartLine, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Dashboard() {

  const data = {
    labels: ['0', '5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k', '45k', '50k', '55k', '60k'],
    datasets: [
      {
        label: 'Sales',
        data: [30, 45, 28, 80, 99, 43, 76, 47, 45, 65, 41, 39, 47],
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
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: (value: any) => `${value}%`,
        },
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
            <p>Up from yesterday</p>
          </div>
          <div className="max-w-ml bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
            <div className="grid grid-cols-2 gap-4">
              <p>Total Task</p>
              <h2 className="text-4xl text-end"><FontAwesomeIcon icon={faBoxOpen} /></h2>
            </div>
            <h2 className="text-4xl font-bold mb-6">10</h2>
            <p>Up from yesterday</p>
          </div>
          <div className="max-w-ml bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
            <div className="grid grid-cols-2 gap-4">
              <p>Total Completed</p>
              <h2 className="text-4xl text-end"><FontAwesomeIcon icon={faChartLine} /></h2>
            </div>
            <h2 className="text-4xl font-bold mb-6">10</h2>
            <p>Up from yesterday</p>
          </div>
          <div className="max-w-ml bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
            <div className="grid grid-cols-2 gap-4">
              <p>Total Pending</p>
              <h2 className="text-4xl text-end"><FontAwesomeIcon icon={faClockRotateLeft} /></h2>
            </div>
            <h2 className="text-4xl font-bold mb-6">2</h2>
            <p>Up from yesterday</p>
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
