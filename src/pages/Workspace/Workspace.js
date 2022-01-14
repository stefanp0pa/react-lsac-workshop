import React from 'react';
import Board from '../../components/Board/Board';
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm';

import { useState, useEffect } from 'react';


async function fetchBoardTitles() {
    return await Promise.resolve(['To Do', 'In Progress', 'Done']);
}

async function fetchTasks() {
    return await Promise.resolve({
        toDoTasks: ['Task 1', 'Task 2', 'Task 3', 'Some other random task', "Epic task", "Epic task 1"],
        progressTasks: ['Task 4', 'Task 5', 'Task 6', 'Fix the last week bug'],
        doneTasks: ['Task 7', 'Task 8']
    });
}

export default function Workspace() {

    const [boardTitles, setBoardTitles] = useState([]);
    const [tasks, setTasks] = useState({ toDoTasks: [], progressTasks: [], doneTasks: [] });
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        console.log('[Workspace] Fetching board titles...');
        const result = await fetchBoardTitles();
        setBoardTitles(result);
    }, []);

    // How to do it right
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        console.log("[Workspace] Fetching tasks...");
        const result = await fetchTasks();
        setTasks({ 
            toDoTasks: result.toDoTasks, 
            progressTasks: result.progressTasks, 
            doneTasks: result.doneTasks });
    }, []);

    useEffect(() => {
        console.log("[Workspace] ToDo board affected");
    }, [tasks.toDoTasks]);

    useEffect(() => {
        console.log("[Workspace] InProgress board affected");
    }, [tasks.progressTasks]);

    useEffect(() => {
        console.log("[Workspace] Done board affected");
    }, [tasks.doneTasks]);

    // How NOT to do it right
    // useEffect(async () => {
    //     console.log("[Workspace] Fetching tasks...");
    //     const result = await fetchTasks();
    //     setTasks({ 
    //         toDoTasks: result.toDoTasks, 
    //         progressTasks: result.progressTasks, 
    //         doneTasks: result.doneTasks });
    // });

    const addNewTask = (newTask) => {
        const newToDoTasks = [...tasks.toDoTasks, newTask];
        setTasks({...tasks, toDoTasks: newToDoTasks });
    }

    const upgradeToDoProgress = (title) => {
        const newToDos = tasks.toDoTasks.filter(task => task !== title);
        const newProgress = [...tasks.progressTasks, title];
        setTasks({...tasks, toDoTasks: newToDos, progressTasks: newProgress});
    }

    const downgradeProgressToDo = (title) => {
        const newProgress = tasks.progressTasks.filter(task => task !== title);
        const newToDos = [...tasks.toDoTasks, title];
        setTasks({...tasks, progressTasks: newProgress, toDoTasks: newToDos});
    }

    const upgradeProgressDone = (title) => {
        const newProgress = tasks.progressTasks.filter(task => task !== title);
        const newDone = [...tasks.doneTasks, title];
        setTasks({...tasks, progressTasks: newProgress, doneTasks: newDone});
    }

    const downgradeDoneProgress = (title) => {
        const newDone = tasks.doneTasks.filter(task => task !== title);
        const newProgress = [...tasks.progressTasks, title];
        setTasks({...tasks, doneTasks: newDone, progressTasks: newProgress});
    }

    const deleteTaskFromTodo = (title) => {
        const newToDos = tasks.toDoTasks.filter(task => task !== title);
        setTasks({...tasks, toDoTasks: newToDos});
    }

    const deleteTaskFromProgress = (title) => {
        const newProgress = tasks.progressTasks.filter(task => task !== title);
        setTasks({...tasks, progressTasks: newProgress});
    }

    const deleteTaskFromDone = (title) => {
        const newDone = tasks.doneTasks.filter(task => task !== title);
        setTasks({...tasks, doneTasks: newDone});
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
                    upgradeToDoProgress={upgradeToDoProgress}
                    deleteTask = {deleteTaskFromTodo}/>

                <Board className="mr-1" title={boardTitles[1]} items={tasks.progressTasks}
                    upgradeProgressDone={upgradeProgressDone}
                    downgradeDoneProgress={downgradeDoneProgress}
                    downgradeProgressToDo={downgradeProgressToDo}
                    upgradeToDoProgress={upgradeToDoProgress}
                    deleteTask = {deleteTaskFromProgress}/>

                <Board className="mr-1" title={boardTitles[2]} items={tasks.doneTasks}
                    upgradeProgressDone={upgradeProgressDone}
                    downgradeDoneProgress={downgradeDoneProgress}
                    downgradeProgressToDo={downgradeProgressToDo}
                    upgradeToDoProgress={upgradeToDoProgress}
                    deleteTask = {deleteTaskFromDone}/>
            </div>
        </div>
    );
}