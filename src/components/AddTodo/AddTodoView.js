import { Button, Form, InputGroup, Row, Col } from 'react-bootstrap';
import * as yup from 'yup';
import { Formik } from 'formik';
import './AddTodo.css';

/**
 * Add view todo component
 * @returns {object} Add view todo jsx
 */
const AddTodoView = ({
  saveSubmitData,
  setShowAddTodoModal,
  isShowAddTodoModal,
}) => {
  const handleFormSubmit = (newTodo) => {
    setShowAddTodoModal(false)
    saveSubmitData(newTodo)
  }
  const schema = yup.object().shape({
    title: yup.string().required('Title is required.'),
    description: yup.string().required('Descriprion is required.'),
    color: yup.string().required('Color is required.'),
  });

  return (
    <>
      <Row>
        <Col>
          <Button variant="primary" onClick={() => setShowAddTodoModal(true)}>
            Create New Todo
        </Button>
        </Col>
      </Row>
      {!isShowAddTodoModal ? null : (<div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>New Todo</h2>
            <span
              className="close"
              onClick={() => setShowAddTodoModal(false)}>&times;</span>
          </div>
          <div className="modal-body">
            <Formik
              validationSchema={schema}
              onSubmit={(values, actions) => {
                values.title = values.title.trim()
                values.description = values.description.trim()
                if(!(values.title || values.description)) {
                  actions.validateForm()
                  actions.setSubmitting(false);
                  return
                }
                handleFormSubmit(values)
                
              }}
              initialValues={{
                title: '',
                description: '',
                color: '#cbcbcb',
              }}
            >
              {({
                handleSubmit,
                handleChange,
                values,
                touched,
                errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Row>
                    <Form.Group as={Col} md="12" controlId="validationTitle">
                      <Form.Label>Title</Form.Label>
                      <InputGroup >
                        <Form.Control
                          type="text"
                          name="title"
                          value={values.title}
                          onChange={handleChange}
                          isInvalid={touched.title && !!errors.title}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.title}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationDescription">
                      <Form.Label>Description</Form.Label>
                      <InputGroup >
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="description"
                          value={values.description}
                          onChange={handleChange}
                          isInvalid={touched.description && !!errors.description}
                        />
                        <Form.Control.Feedback type="invalid" >
                          {errors.description}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="1" controlId="validationColor">
                      <Form.Label>Color</Form.Label>
                      <InputGroup >
                        <Form.Control
                          type="color"
                          name="color"
                          value={values.color}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Form.Row>
                  <Button type="submit">Create Todo</Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>)}
    </>
  );
}

export default AddTodoView;
