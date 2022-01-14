import React from 'react';
import Item from '../../atoms/Item/Item';
import BoardTitle from '../../atoms/BoardTitle/BoardTitle';

import { useContext } from 'react';
import { WorkspaceContext } from '../../pages/Workspace/Workspace';

export default function Board(props) {

    const { upgradeToDoProgress, 
        downgradeProgressToDo, 
        upgradeProgressDone, 
        downgradeDoneProgress } = useContext(WorkspaceContext);

    const handleItemDowngrade = (title, origin) => {
        if (origin === "In Progress") {
            downgradeProgressToDo(title);
        } else if (origin === "Done") {
            downgradeDoneProgress(title);
        } else return;
    }

    const handleItemUpgrade = (title, origin) => {
        if (origin === "To Do") {
            upgradeToDoProgress(title);
        } else if (origin === "In Progress") {
            upgradeProgressDone(title);
        }  else return;
    }

    const handleItemDelete = (title) => {
        props.deleteTask(title);
    }

    return (
        <div className="bg-blue-400 w-1/4 rounded-lg h-full">
            <div>
                <BoardTitle title = {props.title}/>
            </div>
            <div>
                {
                    !props.items || props.items.length === 0 ? <p className="text-white text-xl p-2">No items</p> 
                    : props.items.map((item, index) => {
                            return (
                                <Item key={index} 
                                    title={item} 
                                    boardTitle = {props.title} 
                                    handleItemDowngrade = {handleItemDowngrade} 
                                    handleItemUpgrade = {handleItemUpgrade}
                                    handleItemDelete = {handleItemDelete}/>
                            );
                        })
                }
            </div>
        </div>
    );
}