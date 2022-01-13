import React from 'react';	

export default function Header() {
    return (
        <div>
            <ul className="flex">
                <li className="mr-3">
                    <a className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" href="/">Workspace</a>
                </li>
                <li className="mr-3">
                    <a className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3" href="/about">About</a>
                </li>
                <li className="mr-3">
                    <a className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3" href="/fun/1">Fun</a>
                </li>
            </ul>
        </div>
    );
}