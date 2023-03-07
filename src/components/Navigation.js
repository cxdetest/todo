import React from 'react';

const Navigation = ({ view, setView, setEdit, setID }) => {
  function handleState() {
    setEdit(false);
    setID(0);
  }

  return (
    <section className='navigation'>
      <button
        onClick={() => {
          setView('add');
          handleState();
        }}
        className={view === 'add' ? 'active' : undefined}
      >
        Add
      </button>
      <button
        onClick={() => {
          setView('list');
          handleState();
        }}
        className={view === 'list' ? 'active' : undefined}
      >
        List
      </button>
    </section>
  );
};

export default Navigation;
