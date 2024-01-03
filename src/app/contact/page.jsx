import styles from './page.module.css'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import ContactForm from '../components/form/form'

export default function Contact() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.backgroundSection}>
          <h1 className={styles.contactTitle}>Envía tu mensaje al Doctor</h1>
          <img
            src="/assets/img/svg/persistencia.svg"
            alt="Persistencia"
            className={styles.backgroundBlue}
          />
          <img
            className={styles.backgroundYellow}
            src="/assets/img/svg/resistencia.svg"
            alt="Resistencia"
          />
          <img
            src="/assets/img/svg/vencer.svg"
            alt="Vencer"
            className={styles.backgroundWhite}
          />
        </section>
        <section className={styles.contactSection}>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  )
}
