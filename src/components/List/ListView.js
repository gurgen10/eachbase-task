import { Table } from 'react-bootstrap';
import './List.css';

/**
 * ListView component.
 * @param {object} props - Props of a ListView.
 * @returns {object} ListView jsx.
 */
const ListView = ({ children }) => {

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </Table>
  )
};

export default ListView;
