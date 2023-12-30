import styles from './page.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import ContactForm from '../components/form'

export default function Contact() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.backgroundSection}>
          <h1 className={styles.contactTitle}>Envía tu mensaje al Doctor</h1>
          <img 
            src="/img/svg/persistencia.svg" 
            alt="Persistencia" 
            className={styles.backgroundBlue}
          />
          <img
            src="/img/svg/resistencia.svg"
            alt="Resistencia"
            className={styles.backgroundYellow}
          />
          <img
            src="/img/svg/vencer.svg"
            alt="Vencer"
            className={styles.backgroundWhite}
          />
        </section>
        <section className={styles.contactSection}>
          <ContactForm />
          <button className={styles.contactButton}>Send</button>
        </section>
      </main>
      <Footer />
    </>
  )
}
