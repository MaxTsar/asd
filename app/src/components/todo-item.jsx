import React from 'react';

export default function Todo(props) {
    function click() {
        props.click(props.id);
    }
    return (
        <div className={`to ${props.checked ? 'active': ''}`} onClick={click}>
            {props.title}
        </div>
    );
}