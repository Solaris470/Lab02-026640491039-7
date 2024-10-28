import { useState, useEffect } from "react";
import Navbar from "./template/header";

export default function HerbLists() {
  const [loadStatus, setLoadStatus] = useState(true);
  const [toDoData, setToDoData] = useState([]);

  useEffect(() => {
    try {
      const fetchToDoData = async () => {
        const pets = await fetch("http://localhost:3004/api/getToDoData");
        if (pets.ok) {
          const petsJson = await pets.json();
          setToDoData(petsJson);
        } else {
          alert("[ERR] Unable to read data.");
        }
      };
      fetchToDoData().catch(console.error);
      setLoadStatus(false);
      console.log("Fetch pets data.");
    } catch (error) {
      alert("[ERR] An error occurs when reading the data.");
    }
  }, [loadStatus]);

  const handleDelete = async (toDoId: any) => {
    try {
      const fetchData = async () => {
        const toDoData = await fetch(
          `http://localhost:3004/api/deleteToDo/${toDoId}`,
          {
            method: "DELETE",
          }
        );
        if (toDoData.ok) {
          const myJson = await toDoData.json();
          alert(myJson.message);
        } else {
          alert("[ERR] An error when deleting data.");
        }
      };
      fetchData();
      setLoadStatus(true);
    } catch (error) {
      alert("[ERR] An error occurs when deleting the data.");
    }
  };

  return (
    <div className="m-3">
      <Navbar />
      <div className="p-4 pt-16 sm:ml-64">
        <a href="/todo/toDoForm">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add To Do
          </button>
        </a>
        <table className="min-w-full bg-white border border-gray-200 mt-3">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Task Name</th>
              <th className="px-4 py-2 border">Assigned By</th>
              <th className="px-4 py-2 border">Assigned To</th>
              <th className="px-4 py-2 border">Due Date</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {toDoData.map((to_do: any) => (
              <tr key={to_do.id}>
                <td className="px-4 py-2 border">{to_do.taskName}</td>
                <td className="px-4 py-2 border">{to_do.assigned_by}</td>
                <td className="px-4 py-2 border">{to_do.assigned_to}</td>
                <td className="px-4 py-2 border">{to_do.due_date}</td>
                <td className="px-4 py-2 border">
                  <span
                    className={`${
                      to_do.status === "pending"
                        ? "bg-gray-300 p-2 rounded-xl text-white inline-block"
                        : to_do.status === "in-progress"
                        ? "bg-yellow-300 p-2 rounded-xl text-white inline-block"
                        : "bg-green-300 p-2 rounded-xl text-white inline-block"
                    }
                  `}
                  >
                    {to_do.status}
                  </span>
                </td>
                <td className="px-4 py-2 border flex justify-center">
                <a href={`/todo/toDoDetail/${to_do.toDoId}`}>
                  <button
                    className="text-white bg-cyan-300 hover:bg-cyan-500 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-cyan-500 dark:hover:
                   focus:outline-none dark:focus:ring-cyan-700 flex"
                  >
                    <svg
                      className="w-6 h-6 text-white-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z"
                      />
                    </svg>
                    View More
                  </button>
                  </a>
                  <a href={`/todo/toDoEditForm/${to_do.toDoId}`}>
                  <button
                    className="text-white bg-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-500 dark:hover:
                   focus:outline-none dark:focus:ring-yellow-700 flex"
                  >
                    <svg
                      className="w-6 h-6 text-white-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                      />
                    </svg>
                    Edit
                  </button>
                  </a>
                  <button
                    onClick={() => handleDelete(to_do.toDoId)}
                    className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-500 dark:hover:
                   focus:outline-none dark:focus:ring-red-700 flex"
                  >
                    <svg
                      className="w-6 h-6 text-white-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
