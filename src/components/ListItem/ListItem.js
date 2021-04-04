import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { confirmWindow } from '../../utils/alertPupup';
import { updateSelectedTodo, deleteSelectedTodo } from '../../store/actions/todoActions';
import ListItemView from './ListItemView';

/**
 * List item component.
 * @param {object} props - Props of a ListItem.
 * @returns {object} ListItem jsx.
 */
const ListItem = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [color, setColor] = useState(todo.color);
  const dispatch = useDispatch();

  const updateOnClick = () => {
    const updatedTodo = {
      id: todo.id,
      title: title.trim(),
      description: description.trim(),
      color
    }
    dispatch(updateSelectedTodo(updatedTodo))
  }
  const deleteOnClick = () => {
    confirmWindow(
      () => dispatch(deleteSelectedTodo(todo.id)),
      `You want to delete "${todo.title}" todo`
    )
  }

  return (
  <ListItemView
    todo={todo}
    edit={edit}
    setEdit={isEdit => setEdit(isEdit)}
    title={title}
    setTitle={ title => setTitle(title)}
    description={description}
    setDescription={desc => setDescription(desc)}
    color={color}
    setColor={color => setColor(color)}
    showConfirm={showConfirm}
    setShowConfirm={show => setShowConfirm(show)}
    updateOnClick={updateOnClick}
    deleteOnClick={deleteOnClick}
  />)
}
ListItem.propTypes = {
  todo: PropTypes.object
};

export default ListItem;
