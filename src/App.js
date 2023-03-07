import React, { useState } from 'react';
import { ContextReducer } from './components/ContextReducer';
import Add from './components/Add';
import List from './components/List';
import Navigation from './components/Navigation';
import Links from './components/Links';
import './App.scss';

const App = () => {
  const [view, setView] = useState('add');
  const [edit, setEdit] = useState(false);
  const [id, setID] = useState(0);

  return (
    <>
      <p className='title'>TodoApp</p>

      <ContextReducer>
        <div className='container'>
          {view === 'add' ? (
            <Add edit={edit} setView={setView} id={id} setID={setID} />
          ) : (
            <List setView={setView} setEdit={setEdit} setID={setID} />
          )}
          <Navigation
            view={view}
            setView={setView}
            setEdit={setEdit}
            setID={setID}
          />
        </div>
      </ContextReducer>

      <Links />
    </>
  );
};

export default App;
