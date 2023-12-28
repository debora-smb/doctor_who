"use client"
import Form from 'react-bootstrap/Form';
import styles from './form.module.css';

function ContactForm() {
  return (
    <Form >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label/>
        <Form.Control className={styles.contactForm} type="name" placeholder="Nombre *"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label/>
        <Form.Control className={styles.contactForm} type="email" placeholder="Email *"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label/>
        <Form.Control className={styles.contactForm} as="textarea" placeholder="Mensaje *" rows={3} />
      </Form.Group>
    </Form>
  );
}

export default ContactForm;