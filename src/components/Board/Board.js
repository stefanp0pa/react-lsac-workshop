import React from 'react';
import Item from '../../atoms/Item/Item';
import BoardTitle from '../../atoms/BoardTitle/BoardTitle';

export default function Board(props) {

    // const [boardTitles, setBoardTitles] = useState(['To Do', 'In Progress', 'Done']);


    const handleItemDowngrade = (title, origin) => {
        console.log("[Board] Downgrading item: " + title);

        if (origin === "In Progress") {
            props.downgradeProgressToDo(title);
        } else if (origin === "Done") {
            props.downgradeDoneProgress(title);
        } else return;
    }

    const handleItemUpgrade = (title, origin) => {
        console.log("[Board] Upgrading item: " + title);

        if (origin === "To Do") {
            props.upgradeToDoProgress(title);
        } else if (origin === "In Progress") {
            props.upgradeProgressDone(title);
        }  else return;
    }

    return (
        <div className="bg-blue-400 w-1/4 rounded-lg h-full">
            <div>
                <BoardTitle title = {props.title}/>
            </div>
            <div>
                {props.items.map((item, index) => {
                    return (
                        <Item key={index} title={item} boardTitle = {props.title} handleItemDowngrade = {handleItemDowngrade} handleItemUpgrade = {handleItemUpgrade}/>
                    );
                } )}
            </div>
        </div>
    );
}