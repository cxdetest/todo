import React, { useContext, useState, useRef } from 'react';
import { Context } from './ContextReducer';
import { useEffect } from 'react';

const initValues = {
  title: '',
  description: '',
};

const Add = ({ edit, setView, id, setID }) => {
  const node = useRef(null);
  const [todo, setTodo] = useState(initValues);
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    if (id !== 0) {
      const result = state.filter((t) => t.id === id);
      const { title, description } = result[0];
      setTodo({ title, description });
    }
  }, []);

  function handleForm(e) {
    e.preventDefault();

    if (id) {
      dispatch({ type: 'edit', id, description: todo.description });
    } else {
      dispatch({ type: 'add', todo });
    }
    setTodo(initValues);
    node.current.reset();
    setID(0);
    setView('list');
  }

  return (
    <form ref={node} onSubmit={handleForm} style={{ height: '80vh' }}>
      <Input name='title' todo={todo} setTodo={setTodo} />
      <Input name='description' todo={todo} setTodo={setTodo} />

      <button type='submit' className='active'>
        {edit ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default Add;

const Input = ({ name, todo, setTodo }) => {
  return (
    <input
      type='text'
      name={name}
      placeholder={name}
      value={todo[name]}
      onChange={(e) => setTodo({ ...todo, [name]: e.target.value })}
      autoComplete='off'
      autoFocus={name === 'title' ? true : false}
      maxLength={70}
      required
    />
  );
};
