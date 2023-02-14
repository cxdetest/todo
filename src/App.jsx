import { ContextReducer } from './components/ContextReducer';
import { Todos, TodoForm } from './components/exports';
import './App.scss';

const App = () => {
  return (
    <ContextReducer>
      <span className='app'>
        <TodoForm />
        <Todos />
      </span>
    </ContextReducer>
  );
};

export default App;
