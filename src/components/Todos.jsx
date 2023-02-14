import { useContext, useState } from 'react';
import { Context } from './ContextReducer';
import { AiOutlineEdit, AiOutlineCheck } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';

export const Todos = () => {
  const [edit, setEdit] = useState({ bool: false, description: '', id: null });
  const { state, dispatch } = useContext(Context);

  function handleFunctions(bool, id) {
    bool
      ? dispatch({ type: 'edit', id, description: edit.description })
      : dispatch({ type: 'delete', id });

    setEdit(false);
  }

  return (
    <>
      {state.map((t) => (
        <article key={t.id}>
          <span>
            <input
              type='checkbox'
              defaultChecked={t.complete}
              onChange={() => dispatch({ type: 'check', id: t.id })}
            />
            <h3
              style={
                t.complete
                  ? { textDecoration: 'line-through', opacity: 0.4 }
                  : { textDecoration: '' }
              }
            >
              {t.title}
            </h3>
          </span>

          {edit.bool && edit.id === t.id ? (
            <input
              type='text'
              name='description'
              value={edit.description}
              onChange={(e) =>
                setEdit({ ...edit, description: e.target.value })
              }
            />
          ) : (
            <p
              style={
                t.complete
                  ? { textDecoration: 'line-through', opacity: 0.4 }
                  : { textDecoration: '' }
              }
              onClick={() => {
                setEdit({ bool: true, description: t.description, id: t.id });
              }}
            >
              {t.description}
              {' | '}
              <AiOutlineEdit />
            </p>
          )}

          <button
            type='button'
            onClick={(e) => handleFunctions(edit.bool, t.id)}
          >
            {edit.bool && edit.id === t.id ? 'Update' : 'Delete'}
            {' | '}
            {edit.bool && edit.id === t.id ? (
              <AiOutlineCheck />
            ) : (
              <MdDeleteForever />
            )}
          </button>
        </article>
      ))}
    </>
  );
};
