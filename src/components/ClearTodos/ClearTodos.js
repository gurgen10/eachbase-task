import { useDispatch } from 'react-redux';
import { Button, Row, Col } from 'react-bootstrap';
import { confirmWindow } from '../../utils/alertPupup';
import { deleteAllTodos } from '../../store/actions/todoActions';
import './ClearTodos.css';

/**
 * Clear Todos button component.
 * @param {object} props - Props of a ClearTodos.
 * @returns {object} Clear Todos jsx.
 */
const ClearTodos = () => {
  const dispatch = useDispatch();
  const deleteOnClick = () => {
    confirmWindow(
      () => dispatch(deleteAllTodos()),
      `You want to delete All todos from the list.`
    )
  }
  return (
    <Row>
      <Col>
        <Button variant="danger" onClick={deleteOnClick}>
          Clear All Todos
        </Button>
      </Col>
    </Row>
  );
}

export default ClearTodos;
