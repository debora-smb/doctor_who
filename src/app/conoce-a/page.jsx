"use client"
import styles from './page.module.css'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Image from 'next/image'
import ButtonKnowPage from '../components/buttons/knowpage'

export default function KnowPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.mainContent}>
                    <section className={styles.knowDetails}>
                        <h1 className={styles.knowTitle}>Conoce a ... decimotercera doctor</h1>
                        <img className={styles.knowImageMobile} src="/assets/img/doctors/Thirteenth_Doctor_Jodie_Whittaker.jpg" alt="Decimotercera doctor" />
                        <p className={styles.knowText}>Lorem ipsum dolor sit amet consectetur. Convallis maecenas ac pharetra metus justo amet nunc amet. Hac pellentesque proin sapien duis natoque. Risus enim duis quis egestas non. Morbi ut potenti egestas id pharetra gravida interdum nam.</p>
                        <ButtonKnowPage/>
                    </section>
                        <img className={styles.knowImageDesktop} src="/assets/img/doctors/Thirteenth_Doctor_Jodie_Whittaker.jpg" alt="Decimotercera doctor" />
                </div>
                <div className={styles.knowBackground}>
                    <div className={styles.backgroundOne}>
                    <Image
                        
                        src="/assets/img/svg/persistencia-2.svg"
                        width={310}
                        height={310}
                        alt="Persistencia"
                    />
                    </div>
                    <Image
                        className={styles.backgroundTwo}
                        src="/assets/img/svg/resistencia.svg"
                        width={540}
                        height={540}
                        alt="Resistencia"
                    />
                </div>
            </main>
            <Footer />
        </>
    )
}
