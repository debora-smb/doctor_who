"use client"
import Form from 'react-bootstrap/Form';
import styles from './form.module.css';

export default function ContactForm() {
  return (
    <Form >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label/>
        <Form.Control className={styles.contactForm} type="name" placeholder="Nombre *" style={{
                backgroundColor: '#040521', 
                color: '#FFFFFF',
              }}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label/>
        <Form.Control className={styles.contactForm} type="email" placeholder="Email *"  style={{
                backgroundColor: '#040521',
                color: '#FFFFFF',
              }}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label/>
        <Form.Control className={styles.contactForm} as="textarea" placeholder="Mensaje *" rows={5} style={{
                backgroundColor: '#040521',
                color: '#FFFFFF',
              }} />
      </Form.Group>
    </Form>
  );
}