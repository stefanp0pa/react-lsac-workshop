import React from 'react';
import Item from '../../atoms/Item/Item';
import BoardTitle from '../../atoms/BoardTitle/BoardTitle';

export default function Board(props) {
    return (
        <div className="bg-blue-400 w-1/4 rounded-lg h-full">
            <div>
                <BoardTitle title = {props.title}/>
            </div>
            <div>
                {props.items.map((item, index) => {
                    return (
                        <Item key={index} title={item} />
                    );
                } )}
            </div>
        </div>
    );
}