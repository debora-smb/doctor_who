"use client"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './card.module.css'

export default function Cards({doctor}) {
  return (
    <Card className={styles.cardDoctors} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={doctor.image} />
      <Card.Body>
        <Card.Title>{doctor.doctor}</Card.Title>
        <Card.Text>
        {doctor.actor}
        </Card.Text>
        <Card.Text>
        {doctor.screen_time}
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  );
}
