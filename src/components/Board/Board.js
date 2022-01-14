import React from 'react';
import Item from '../../atoms/Item/Item';
import BoardTitle from '../../atoms/BoardTitle/BoardTitle';

export default function Board(props) {

    const handleItemDowngrade = (title, origin) => {
        if (origin === "In Progress") {
            props.downgradeProgressToDo(title);
        } else if (origin === "Done") {
            props.downgradeDoneProgress(title);
        } else return;
    }

    const handleItemUpgrade = (title, origin) => {
        if (origin === "To Do") {
            props.upgradeToDoProgress(title);
        } else if (origin === "In Progress") {
            props.upgradeProgressDone(title);
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