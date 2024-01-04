"use client"
import doctorsData from '../json/doctors.json'
import React, { useState } from 'react';
import styles from './page.module.css'
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Cards from '../components/card/card';


export default function Doctors() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredDoctors = doctorsData.doctors.filter(
    (doctor) =>
      doctor.doctor.toLowerCase().includes(searchTerm) ||
      doctor.actor.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <Header handleSearchChange={handleSearchChange} />
      <main className={styles.doctorsMain}>
        <h2 className={styles.doctorsTitle}>Doctores</h2>
        <section className={styles.cardsContainer}>
          {filteredDoctors.map((doctor) => (
            <Cards key={doctor.id} doctor={doctor} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
