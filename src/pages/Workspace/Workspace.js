import React from 'react';
import Board from '../../components/Board/Board';
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm';

import { useState } from 'react';

export default function Workspace() {

    const [boardTitles, setBoardTitles] = useState(['To Do', 'In Progress', 'Done']);

    const [tasks, setTasks] = useState({
        toDoTasks: ['Task 1', 'Task 2', 'Task 3', 'Some other random task', "Epic task", "Epic task 1"],
        progressTasks: ['Task 4', 'Task 5', 'Task 6', 'Fix the last week bug'],
        doneTasks: ['Task 7', 'Task 8']
    });

    const addNewTask = (newTask) => {
        console.log("[Workspace] New task: " + newTask);

        const newToDoTasks = [...tasks.toDoTasks, newTask];
        setTasks({
            ...tasks,
            toDoTasks: newToDoTasks
        });
    }

    const upgradeToDoProgress = (title) => {
        console.log("[Workspace] Upgrading ToDo-Progress task: " + title);
        const newToDos = tasks.toDoTasks.filter(task => task !== title);
        const newProgress = [...tasks.progressTasks, title];

        setTasks({
            toDoTasks: newToDos,
            progressTasks: newProgress,
            doneTasks: tasks.doneTasks
        });
    }

    const downgradeProgressToDo = (title) => {
        console.log("[Workspace] Downgrading Progress-ToDo task: " + title);

        const newProgress = tasks.progressTasks.filter(task => task !== title);
        const newToDos = [...tasks.toDoTasks, title];
        
        setTasks({
            toDoTasks: newToDos,
            progressTasks: newProgress,
            doneTasks: tasks.doneTasks
        });
    }

    const upgradeProgressDone = (title) => {
        console.log("[Workspace] Upgrading Progress-Done task: " + title);

        const newProgress = tasks.progressTasks.filter(task => task !== title);
        const newDone = [...tasks.doneTasks, title];

        setTasks({
            toDoTasks: tasks.toDoTasks,
            progressTasks: newProgress,
            doneTasks: newDone
        });
    }

    const downgradeDoneProgress = (title) => {
        console.log("[Workspace] Downgrading Done-Progress task: " + title);

        const newDone = tasks.doneTasks.filter(task => task !== title);
        const newProgress = [...tasks.progressTasks, title];

        setTasks({
            toDoTasks: tasks.toDoTasks,
            progressTasks: newProgress,
            doneTasks: newDone
        });
    }

    return (
        <div>
            <h1 className="text-center mt-10 text-3xl font-bold">
                Trello Board
            </h1>
            <div>
                <AddTaskForm addNewTask = {addNewTask}/>
            </div>
            <div className="flex flex-row justify-between mt-10 ml-4 mr-4">
                <Board className="mr-1" title={boardTitles[0]} items={tasks.toDoTasks} 
                    upgradeProgressDone={upgradeProgressDone} 
                    downgradeDoneProgress={downgradeDoneProgress}
                    downgradeProgressToDo={downgradeProgressToDo}
                    upgradeToDoProgress={upgradeToDoProgress}/>

                <Board className="mr-1" title={boardTitles[1]} items={tasks.progressTasks}
                    upgradeProgressDone={upgradeProgressDone}
                    downgradeDoneProgress={downgradeDoneProgress}
                    downgradeProgressToDo={downgradeProgressToDo}
                    upgradeToDoProgress={upgradeToDoProgress}/>

                <Board className="mr-1" title={boardTitles[2]} items={tasks.doneTasks}
                    upgradeProgressDone={upgradeProgressDone}
                    downgradeDoneProgress={downgradeDoneProgress}
                    downgradeProgressToDo={downgradeProgressToDo}
                    upgradeToDoProgress={upgradeToDoProgress}/>
            </div>
        </div>
    );
}