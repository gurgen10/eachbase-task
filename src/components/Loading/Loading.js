import { Spinner } from 'react-bootstrap';

/**
 * Loading component.
 * @param {object} props - Props of a Loading.
 * @returns {object} Loading jsx.
 */
const Loading = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  )
}

export default Loading;
