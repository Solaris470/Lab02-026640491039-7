import { useState, useEffect } from "react";
import { useNavigate, useParams } from "@remix-run/react";

export default function HerbDetail(){

    
    const myParams = useParams();
    const toDoId = myParams.toDoId;
    const [toDoData, setToDoData] = useState({
        toDoId: '',
        taskName: '',
        status: '',
        priority: '',
        due_date: '',
        desc: '',
        category: '',
        assigned_to: '',
        assigned_by: ''
    });

    useEffect(() => {
        try {
            const fetchPetData = async () => {
                const data = await fetch(`http://localhost:3004/api/getToDoById/${toDoId}`);
                if (data.ok) {
                    const ToDoJson = await data.json();
                    setToDoData(ToDoJson);
                    console.log(ToDoJson);
                } else {
                    alert('[ERR] Failed to loaded data.');
                }
            }

            fetchPetData().catch(console.error);
        } catch (error) {
            alert('[ERR] An error occurred while loading the data.');
        }
    }, []);

    return (
    <div className="m-3">
        <a href='/todo/toDoList'>
        <button type="button" className="flex justify-self-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
</svg>
Back To List</button>
        </a>
                <div className="max-w-2xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Task Details</h2>

            <div className="space-y-4">
                <DetailRow label="Task ID" value={toDoData.toDoId} />
                <DetailRow label="Task Name" value={toDoData.taskName} />
                <DetailRow label="Status" value={toDoData.status} color={toDoData.status === 'Completed' ? 'bg-green-300' : 'bg-yellow-300'} />
                <DetailRow label="Priority" value={toDoData.priority} color={toDoData.priority === 'high' ? 'text-red-500' : toDoData.priority === 'medium' ? 'text-yellow-500' : 'text-green-500'} />
                <DetailRow label="Due Date" value={toDoData.due_date} />
                <DetailRow label="Description" value={toDoData.desc} />
                <DetailRow label="Category" value={toDoData.category} />
                <DetailRow label="Assigned To" value={toDoData.assigned_to} />
                <DetailRow label="Assigned By" value={toDoData.assigned_by} />
            </div>
        </div>
    </div>
    );
    
}
const DetailRow: React.FC<{ label: string; value: string; color?: string }> = ({ label, value, color = '' }) => (
    <div className="flex items-center">
        <span className="w-1/4 font-semibold text-gray-700">{label}:</span>
        <span className={`w-3/4 p-2 rounded-lg ${color} ${color ? 'text-white' : 'text-gray-800'}`}>{value}</span>
    </div>
)