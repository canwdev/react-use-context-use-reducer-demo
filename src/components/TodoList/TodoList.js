import React from 'react'
import {useStoreState, useStoreActions} from 'easy-peasy'

export default function TodoList() {
  const todos = useStoreState((state) => state.todos.items);
  const add = useStoreActions((actions) => actions.todos.add);
  return (
    <div>
      <ul>

        {todos.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
      <button onClick={() => add('test')} >add</button>
    </div>
  );
}
