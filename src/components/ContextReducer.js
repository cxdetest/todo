import React, { useReducer } from 'react';

export const Context = React.createContext([
  {
    id: crypto.randomUUID(),
    title: 'learn another language',
    description: 'learning another language is interesting',
    complete: true,
  },
]);

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      action.todo.complete = false;
      action.todo.id = crypto.randomUUID();
      return [...state, action.todo];

    case 'edit':
      return state.map((t) =>
        t.id === action.id ? { ...t, description: action.description } : t
      );

    case 'check':
      return state.map((t) =>
        t.id === action.id ? { ...t, complete: !t.complete } : t
      );

    case 'delete':
      return state.filter((t) => t.id !== action.id);

    default:
      console.log(state);
      return state;
  }
};

export const ContextReducer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, Context._currentValue);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
