import React from 'react';
import Item from '../../atoms/Item/Item';
import BoardTitle from '../../atoms/BoardTitle/BoardTitle';

export default function Board(props) {

    const handleItemDowngrade = (title) => {
        console.log("[Board] Downgrading item: " + title);
    }

    const handleItemUpgrade = (title) => {
        console.log("[Board] Upgrading item: " + title);
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