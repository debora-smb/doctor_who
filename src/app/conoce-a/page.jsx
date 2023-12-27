import styles from './page.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Button from '../components/button'
import Image from 'next/image'

export default function KnowPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.info}>
                <section className={styles.KnowDetails}>
                    <h1 className={styles.KnowTitle}>Conoce a ... decimotercera doctor</h1>
                    <p className={styles.KnowText}>Lorem ipsum dolor sit amet consectetur. Convallis maecenas ac pharetra metus justo amet nunc amet. Hac pellentesque proin sapien duis natoque. Risus enim duis quis egestas non. Morbi ut potenti egestas id pharetra gravida interdum nam.</p>
                    <Button className={styles.KnowButton} />
                </section>
                <img className={styles.KnowImage} src="/img/doctors/Thirteenth_Doctor_Jodie_Whittaker.jpg" alt="Decimotercera doctor" />
                </div>
                <section className={styles.background}>
                <Image
                className={styles.backgroundOne}
                src="/img/svg/persistencia-2.svg"
                width={417}
                height={417}
                alt="Persistencia"
            />
            <Image
                className={styles.backgroundTwo}
                src="/img/svg/resistencia.svg"
                width={641}
                height={641}
                alt="Resistencia"
            />
            </section>
            </main>

            <Footer />
        </>
    )
}
