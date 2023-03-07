import React, { useContext } from 'react';
import { Context } from './ContextReducer';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';

const List = ({ setView, setEdit, setID }) => {
  const { state, dispatch } = useContext(Context);

  return (
    <>
      {state.length > 0 ? (
        <ul>
          {state.map((todo) => (
            <li key={todo.id} style={{ opacity: todo.complete ? 0.7 : '' }}>
              <input
                type='checkbox'
                checked={todo.complete}
                onChange={() => dispatch({ type: 'check', id: todo.id })}
              />

              <span
                style={{ textDecoration: todo.complete ? 'line-through' : '' }}
              >
                {todo.title}
              </span>
              <span
                style={{ textDecoration: todo.complete ? 'line-through' : '' }}
              >
                {todo.description}
              </span>

              <span>
                <AiOutlineEdit
                  style={{ display: todo.complete ? 'none' : 'initial' }}
                  onClick={() => {
                    setID(todo.id);
                    setView('add');
                    setEdit(true);
                  }}
                />
                <BsTrash
                  onClick={() => {
                    dispatch({ type: 'delete', id: todo.id });
                    setID(0);
                  }}
                />
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nothing here.</p>
      )}
    </>
  );
};

export default List;
