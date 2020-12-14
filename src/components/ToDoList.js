/* Phan tich
App
| ToDoList
*/
import React from 'react';
import PropTypes from 'prop-types';

ToDoList.propTypes = {
    todos: PropTypes.array,
    onToDoClick: PropTypes.func,
};

ToDoList.defaultProps = {
    todos: [],
    onToDoClick: null,
}

function ToDoList(props) {
    const { todos, onToDoClick } = props;
 
    function handleClick(todo) {
        if (onToDoClick) {
            onToDoClick(todo);
        }
    }

    const elements = todos.map((todo, index) => {
        return <li
            onClick={handleClick(todo)}
            key={index}>
            {todo.name}
        </li>
    });
    return (
        <ul className="todo-list">
            { elements}
        </ul>
    );
}

export default ToDoList;