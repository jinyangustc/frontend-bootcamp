import React from 'react';

export const TodoListItem = (props: any) => {
  let { label, completed } = props;
  return (
    <li className="todo">
      <label>
        <input type="checkbox" checked={completed} /> {label}
      </label>
    </li>
  );
};
