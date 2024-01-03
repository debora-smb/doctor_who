"use client"
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './form.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
      alert('Por favor, complete todos los campos antes de enviar el formulario.');
      return;
    }

    console.log('Form Data:', formData);
    alert('¡Su mensaje ha sido enviado correctamente!');

  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label />
        <Form.Control
          className={styles.contactForm}
          type="text"
          name="name"
          placeholder="Nombre *"
          style={{
            backgroundColor: '#040521',
            color: '#FFFFFF',
          }}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label />
        <Form.Control
          className={styles.contactForm}
          type="email"
          name="email"
          placeholder="Email *"
          style={{
            backgroundColor: '#040521',
            color: '#FFFFFF',
          }}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label />
        <Form.Control
          className={styles.contactForm}
          as="textarea"
          name="message"
          placeholder="Mensaje *"
          rows={5}
          style={{
            backgroundColor: '#040521',
            color: '#FFFFFF',
          }}
          onChange={handleInputChange}
        />
      </Form.Group>
      <button  className={styles.contactButton} type="submit">Enviar</button>
    </Form>
  );
}
