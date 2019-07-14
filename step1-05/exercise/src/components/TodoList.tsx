import React from 'react';
import { TodoListItem } from './TodoListItem';

export class TodoList extends React.Component<any, any> {
  render() {
    return (
      <ul>
        {[1, 2, 3, 4].map(x => {
          return <TodoListItem />;
        })}
      </ul>
    );
  }
}
