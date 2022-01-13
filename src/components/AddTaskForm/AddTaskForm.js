import React from 'react';

export default function AddTaskForm() {
    return (
        <div className="ml-4 mt-4 w-full max-w-xl">
            <form>
                <div>
                    <label className='block text-gray-700 text-xl font-bold mb-2' for="addTaskForm">Create new task:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="addTaskForm" type="text" placeholder="New task... (e.g. Take trash out)"/>
                </div>
                <div className="mt-4">
                    <button class="bg-blue-500 
                        hover:bg-blue-700 
                        text-white 
                        font-bold 
                        py-2 px-8 
                        rounded 
                        focus:outline-none 
                        focus:shadow-outline" 
                        type="button">
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}