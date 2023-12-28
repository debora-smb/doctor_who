import styles from './page.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import ContactForm from '../components/form'
import Image from 'next/image'

export default function Contact() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.backgroundSection}>
          <h1 className={styles.contactTitle}>Envía tu mensaje al Doctor</h1>
          <Image
            src="/img/svg/persistencia.svg"
            width={275}
            height={275}
            alt="Persistencia"
            className={styles.backgroundBlue}
          />
          <Image
            src="/img/svg/resistencia.svg"
            width={540}
            height={540}
            alt="Resistencia"
            className={styles.backgroundYellow}
          />
          <Image
            src="/img/svg/vencer.svg"
            width={325}
            height={325}
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
