import React from 'react';
import { ArrowRightIcon, XIcon, TrashIcon } from '@heroicons/react/solid';

export default function Item(props) {

    const handleItemDowngrade = () => {
        props.handleItemDowngrade(props.title, props.boardTitle);
    }

    const handleItemUpgrade = () => {
        props.handleItemUpgrade(props.title, props.boardTitle);
    }

    const handleItemDelete = () => {
        props.handleItemDelete(props.title, props.boardTitle);
    }

    return (
        <div className="text-white text-xl p-2 truncate flex flex-row items-center justify-between">
            <span>{props.title}</span>
            <div className="flex flex-row">
                {props.boardTitle !== "Done" ? <ArrowRightIcon className="h-5 w-5 text-white" onClick={handleItemUpgrade}/> : "" }
                {props.boardTitle !== "To Do" ? <XIcon className="h-5 w-5 text-white" onClick={handleItemDowngrade}/> : "" }
                <TrashIcon className="h-5 w-5 text-white" onClick={handleItemDelete}/>
            </div>
        </div>
    );
}
