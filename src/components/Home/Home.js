import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import List from '../../components/List';
import AddTodo from '../../components/AddTodo';
import ClearTodos from '../../components/ClearTodos';
import Loading from '../../components/Loading';
import { loadTodos } from '../../store/actions/todoActions';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch(loadTodos);
  const todos = useSelector(state => state.todo.todos);
  const loading = useSelector(state => state.todo.loading);
  const error = useSelector(state => state.todo.error);

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  if (loading) {
    return <div className="text-center"><Loading /></div>
  }
  if(error) {
    return <h1 className="text-center text-danger mt-5">{error}</h1>

  }

  return (
    <div className="m-5">
      <Row className="mb-5">
        <Col md="2"> <AddTodo /> </Col>
        <Col md="2"> <ClearTodos /> </Col>
      </Row>
      <List todos={todos} />
    </div>
  )
}

export default Home;
