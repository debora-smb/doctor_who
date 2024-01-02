"use client"
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './searchbar.module.css'
import Image from 'next/image'

export default function SearchBarMobile() {
  return (
    <>
    <div className={styles.searchIcon}>
      <Image
        src="/assets/img/icons/material-symbols-light_search.svg"
        width={20}
        height={20}
        alt="Lupa"
      />
      <p>Buscar</p>
      </div>
      <Navbar className="bg-body-tertiaryjustify-content-between">
        <Form inline className={styles.searchBar1}>
          <Row className={styles.searchBar2}>
            <Col xs="auto" className={styles.searchBar}>
              <Form.Control
                style={{
                  backgroundColor: '#040521',
                  color: '#FFFFFF',
                }}
                type="text"
                placeholdertextcolor="white"
                className={styles.searchBarBorder}
              />
            </Col>
          </Row>
        </Form>
      </Navbar>
    </>
  );
}

