import React from 'react';
import { ArrowRightIcon, XIcon } from '@heroicons/react/solid';

export default function Item(props) {

    const handleItemDowngrade = () => {
        console.log("[Item] Downgrading item: " + props.title);
        props.handleItemDowngrade(props.title);
    }

    const handleItemUpgrade = () => {
        console.log("[Item] Upgrading item: " + props.title);
        props.handleItemUpgrade(props.title);
    }

    return (
        <div className="text-white text-xl p-2 truncate flex flex-row items-center justify-between">
            <span>{props.title}</span>
            <div className="flex flex-row">
                {props.boardTitle !== "Done" ? <ArrowRightIcon className="h-5 w-5 text-white" onClick={handleItemUpgrade}/> : "" }
                {props.boardTitle !== "To Do" ? <XIcon className="h-5 w-5 text-white" onClick={handleItemDowngrade}/> : "" }
            </div>
        </div>
    );
}
