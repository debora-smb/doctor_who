"use client"
import { Form, Row, Col, Button } from 'react-bootstrap';
import React from 'react';
import styles from './searchbar.module.css'

export default function SearchBar({ handleSearchChange }) {

  return (
    <Form className={styles.searchContainer}>
      <img
        src="/assets/img/icons/material-symbols-light_search.svg"
        alt="Lupa"
      />
      <Row className="mb-3">
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Buscar"
            placeholdertextcolor="white"
            onChange={handleSearchChange}
            className={styles.searchBar}
            style={{
              backgroundColor: '#040521',
              color: '#FFFFFF',
            }}
          />
        </Col>
      </Row>
    </Form>
  );
}


