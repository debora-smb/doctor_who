"use client"
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FormExample() {
  return (
    <Navbar  className="bg-body-tertiaryjustify-content-between">
      <Form inline >
        <Row >
          <Col xs="auto">
            <Form.Control
            style={{
                backgroundColor: '#040521',
              }}
              type="text"
              placeholder="Buscar"
              className=" mr-sm-2"
            />
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default FormExample;
