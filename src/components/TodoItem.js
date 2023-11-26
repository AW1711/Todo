import React from 'react';
import { useSpring, animated } from 'react-spring';

const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.li style={fade}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggleComplete}
      />
      {todo.text}
      <button onClick={onDelete}>Delete</button>
    </animated.li>
  );
};

export default TodoItem;
