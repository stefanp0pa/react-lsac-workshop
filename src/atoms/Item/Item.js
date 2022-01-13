import React from 'react';

export default function Item(props) {
    return (
        <div className="text-white text-xl p-2 truncate">
            {props.title}
        </div>
    );
}
