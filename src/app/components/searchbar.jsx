"use client"
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './searchbar.module.css'

function FormExample() {
  return (
    <Navbar  className="bg-body-tertiaryjustify-content-between">
      <Form inline className={styles.searchBar1}>
        <Row className={styles.searchBar2}>
          <Col xs="auto" className={styles.searchBar}>
            <Form.Control 
            style={{
                backgroundColor: '#040521',
              }}
              type="text"
              placeholder="Buscar"
              className={styles.searchBarBorder}
            />
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default FormExample;
