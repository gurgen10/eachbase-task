import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createNewTodo } from '../../store/actions/todoActions';
import AddTodoView from './AddTodoView';

/**
 * Add todo component
 * @returns {object} Add todo jsx
 */
const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const [isShowAddTodoModal, setShowAddTodoModal] = useState(false);
  const dispatch = useDispatch(createNewTodo);

  const saveSubmitData = ({ title, description, color }) => {
    const newTodo = {
      id: null,
      title,
      description,
      color
    }
    dispatch(createNewTodo(newTodo))
  };
  const unmounted = useRef(false);
  useEffect(() => {
    return () => { unmounted.current = true }
  }, []);

  return (
    <AddTodoView
      saveSubmitData={saveSubmitData}
      setShowAddTodoModal={(show) => setShowAddTodoModal(show)}
      isShowAddTodoModal={isShowAddTodoModal}
      todo={todo}
      setTodo={(todo) => setTodo(todo)}
    />
  );

}

export default AddTodo;
