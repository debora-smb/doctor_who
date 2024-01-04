"use client"
import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './card.module.css'
import ButtonDoctors from '../buttons/doctorspage';

export default function Cards({ doctor }) {
  return (
    <Card key={doctor.id} className={styles.cardDoctors} style={{ width: '18rem' }}>
      <figure className={styles.imageContainer}>
        <Card.Img variant="top" src={doctor.image} className={styles.cardImage}/>
      </figure>
      <Card.Body className={styles.cardDetails}>
        <Card.Title className={styles.cardTitle}>{doctor.doctor}</Card.Title>
        <Card.Text className={styles.cardActor}>
        {doctor.actor}
        </Card.Text>
        <Card.Text className={styles.cardYears}>
        {doctor.screen_time}
        </Card.Text>
        <ButtonDoctors className={styles.cardButton} />
      </Card.Body>
    </Card>
  );
}
