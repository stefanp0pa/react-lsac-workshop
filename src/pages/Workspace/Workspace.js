import React from 'react';
import Board from '../../components/Board/Board';
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm';

export default function Workspace() {
    return (
        <div>
            <h1 className="text-center mt-10 text-3xl font-bold">
                Trello Board
            </h1>
            <div>
                <AddTaskForm />
            </div>
            <div className="flex flex-row justify-between mt-10 ml-4 mr-4">
                <Board className="mr-1"/>
                <Board className="mr-1"/>
                <Board className="mr-1"/>
            </div>
        </div>
    );
}