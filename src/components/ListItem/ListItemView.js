import PropTypes from 'prop-types';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

import './ListItem.css';
/**
 * List item component view.
 * @param {object} props - Props of a ListItem View.
 * @returns {object} ListItemView jsx.
 */
const ListItemView = ({
  todo,
  edit,
  setEdit,
  title,
  setTitle,
  description,
  setDescription,
  color,
  setColor,
  updateOnClick,
  deleteOnClick,
}) => {

  const button = !edit ?
    (<>
      <Button className="mr-2" variant="primary" onClick={() => setEdit(true)}>
        Update
      </Button>
      <Button variant="danger" onClick={deleteOnClick}>
        Delete
      </Button>
    </>) :
    (<>
      <Button
        disabled={(!title.trim() || !description.trim())}
        variant={(!title.trim() || !description.trim()) ? 'danger' : 'info'}
        onClick={updateOnClick}>
        Save
    </Button>
      <Button className='ml-2' variant="secondary" onClick={() => setEdit(false)}>
        Cancel
    </Button>
    </>)

  return (
    <tr>
      <td>{edit ?
        (<InputGroup className="mb-3">
          <FormControl
            placeholder="title"
            value={title}
            aria-label="description"
            aria-describedby="basic-addon2"
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputGroup>) : todo.title}
      </td>
      <td>
        {edit ?
          (<InputGroup className="mb-3">
            <FormControl
              as="textarea"
              rows="3"
              placeholder="description"
              value={description}
              aria-label="description"
              aria-describedby="basic-addon2"
              onChange={(e) => setDescription(e.target.value)}
            />
          </InputGroup>) : todo.description}
      </td>
      {edit ? (
        <td>
          <FormControl
            type="color"
            color={color}
            placeholder="color"
            value={color}
            aria-label="color"
            aria-describedby="basic-addon2"
            onChange={(e) => setColor(e.target.value)}
          /></td>) : <td style={{ backgroundColor: color }}>{todo.color}</td>}

      <td>
        {button}
      </td>
    </tr>
  )
}
ListItemView.propTypes = {
  todo: PropTypes.object,
  edit: PropTypes.bool,
  setEdit: PropTypes.func,
  title: PropTypes.string,
  setTitle: PropTypes.func,
  description: PropTypes.string,
  setDescription: PropTypes.func,
  color: PropTypes.string,
  setColor: PropTypes.func,
  updateOnClick: PropTypes.func,
  deleteOnClick: PropTypes.func,
};

export default ListItemView;
