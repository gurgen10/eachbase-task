import ListItem from '../ListItem';
import ListView from './ListView';

/**
 * List component.
 * @param {object} props - Props of a List.
 * @returns {object} List jsx.
 */
const List = ({ todos }) => {
  const itemList = todos.map(todo => {
    return (
      <ListItem
        key={todo.id}
        todo={todo}
      />
    )
  });
  return (
    <ListView>{itemList}</ListView>
  )
};

export default List;
