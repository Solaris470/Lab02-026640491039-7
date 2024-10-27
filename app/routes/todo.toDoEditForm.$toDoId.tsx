import { useState, useEffect } from "react";
import { useNavigate, useParams } from "@remix-run/react";
import Navbar from "./template/header";

export default function PetEditForm(){
    const navigate = useNavigate();
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
    const [typeOption, setTypeOption] = useState('');

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setToDoData({
          ...toDoData,
          [name]: value
        });
    };

    useEffect(() => {
        try {
            const fetchToDoData = async () => {
                const petData = await fetch(`http://localhost:3004/api/getToDoById/${toDoId}`);
                if (petData.ok) {
                    const ToDoJson = await petData.json();
                    setToDoData(ToDoJson);
                    setTypeOption(ToDoJson.category);
                    console.log(toDoData);
                    
                } else {
                    alert('[ERR] Failed to loaded data.');
                }
            }

            fetchToDoData().catch(console.error);
        } catch (error) {
            alert('[ERR] An error occurred while loading the data.');
        }
    }, []);

    const handleSubmit = async(e:any) => {
      e.preventDefault();
      if(confirm('Confirm the information update?')){
        const form = e.target;
        const formData = new FormData(form);  
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        
        try {
            const resToDo = await fetch(`http://localhost:3004/api/editToDo/${toDoData.toDoId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formJson),
            });
    
            if(resToDo.ok){
                const myJson = await resToDo.json();
                alert(`${myJson.message}`);
                navigate('/todo/toDoList');
            }else{
                alert('[ERR] Failed to update the form.');
            }
        } catch (error) {
            alert('[ERR] An error occurred while updatting the form.');
        }
        return true;
      }
    }

    return (
        <div className="flex justify-center items-center ">
        <Navbar />
        <div className="p-4 pt-16 sm:ml-64">
        <div className="p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-3 text-center">
            Task Management Form
        </h2>
          <form method="POST" onSubmit={handleSubmit}>
            {/* Task Name */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="taskName"
              >
                Task Name
              </label>
              <input type="hidden" name="toDoId" value={toDoData.toDoId} />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="taskName"
                type="text"
                placeholder="Enter task name"
                required
                onChange={handleChange}
                value={toDoData.taskName}
              />
            </div>
  
            {/* Description */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="desc"
                rows={3}
                placeholder="Task description"
                onChange={handleChange}
                value={toDoData.desc}
              ></textarea>
            </div>
  
            {/* Status */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="status"
              >
                Status
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="status"
                onChange={handleChange}
                value={toDoData.status}
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
  
            {/* Priority */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="priority"
              >
                Priority
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="priority"
                onChange={handleChange}
                value={toDoData.priority}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
  
            {/* Due Date */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="due_date"
              >
                Due Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="due_date"
                type="date"
                onChange={handleChange}
                value={toDoData.due_date}
              />
            </div>
  
            {/* Assigned By */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="assigned_by"
              >
                Assigned By
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="assigned_by"
                required
                onChange={handleChange}
                value={toDoData.assigned_by}
              >
                <option value=""></option>
                <option value="อธิศ สนธิรักษ์">อธิศ สนธิรักษ์</option>
                <option value="ปฏิภัทร จันทร์สี่ทิศ">ปฏิภัทร จันทร์สี่ทิศ</option>
                <option value="วชิรวิทย์ โชติช่วง">วชิรวิทย์ โชติช่วง</option>
              </select>
            </div>
  
            {/* Assigned To */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="assigned_to"
              >
                Assigned To
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="assigned_to"
                required
                onChange={handleChange}
                value={toDoData.assigned_to}
              >
                <option value=""></option>
                <option value="อธิศ สนธิรักษ์">อธิศ สนธิรักษ์</option>
                <option value="ปฏิภัทร จันทร์สี่ทิศ">ปฏิภัทร จันทร์สี่ทิศ</option>
                <option value="วชิรวิทย์ โชติช่วง">วชิรวิทย์ โชติช่วง</option>
              </select>
            </div>
  
            {/* Category */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="category"
              >
                Category
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="category"
                required
                onChange={handleChange}
                value={toDoData.category}
              >
                <option value=""></option>
                <option value="Requirement Analysis">Requirement Analysis</option>
                <option value="System Design">System Design</option>
                <option value="Development">Development</option>
                <option value="Testing">Testing</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            </div>
  
            {/* Submit Button */}
            <div className="flex">
              <div className="flex items-center me-2 justify-center">
                <a href="/to-do">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit Task
                  </button>
                </a>
              </div>
              <div className="flex items-center justify-center">
                <a href="/todo/toDoList">
                  <button
                    className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    To Do List
                  </button>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    );
}