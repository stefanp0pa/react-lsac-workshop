import React from 'react';
import Board from '../../components/Board/Board';
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm';

import { useState } from 'react';

export default function Workspace() {

    const [boardTitles, setBoardTitles] = useState(['To Do', 'In Progress', 'Done']);
    const [toDoTasks, setToDoTasks] = useState(['Task 1', 'Task 2', 'Task 3', 'Some other random task', "Epic task", "Epic task 1"]);
    const [progressTasks, setProgressTasks] = useState(['Task 4', 'Task 5', 'Task 6', 'Fix the last week bug']);
    const [doneTasks, setDoneTasks] = useState(['Task 7', 'Task 8']);

    return (
        <div>
            <h1 className="text-center mt-10 text-3xl font-bold">
                Trello Board
            </h1>
            <div>
                <AddTaskForm />
            </div>
            <div className="flex flex-row justify-between mt-10 ml-4 mr-4">
                <Board className="mr-1" title={boardTitles[0]} items={toDoTasks}/>
                <Board className="mr-1" title={boardTitles[1]} items={progressTasks}/>
                <Board className="mr-1" title={boardTitles[2]} items={doneTasks}/>
            </div>
        </div>
    );
}