import React from 'react';
import Item from '../../atoms/Item/Item';
import BoardTitle from '../../atoms/BoardTitle/BoardTitle';

export default function Board() {
    return (
        <div className="bg-blue-400 w-1/4 rounded-lg">
            <div>
                <BoardTitle />
            </div>
            <div>
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    );
}