"use client"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './card.module.css'

export default function Cards({doctor}) {
  return (
    <Card className={styles.cardDoctors} style={{ width: '18rem' }}>
      <figure className={styles.imageContainer}><Card.Img variant="top" src={doctor.image} className={styles.cardImage}/></figure>
      <Card.Body>
        <Card.Title className={styles.cardTitle}>{doctor.doctor}</Card.Title>
        <Card.Text className={styles.cardActor}>
        {doctor.actor}
        </Card.Text>
        <Card.Text className={styles.cardYears}>
        {doctor.screen_time}
        </Card.Text>
        <Button className={styles.cardButton}>Ver más</Button>
      </Card.Body>
    </Card>
  );
}
