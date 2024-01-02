import styles from './page.module.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Cards from '../components/card/card';
import doctorsData from '../json/doctors.json';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Doctores</h1>
        <section className={styles.doctorCards}>
          <div className={styles.doctorCard}>
            {doctorsData.doctors.map((doctor) => (
            <Cards doctor={doctor} key={doctor.id} />
          ))}
          </div>
          
        </section>
      </main>
      <Footer />
    </>
  );
}