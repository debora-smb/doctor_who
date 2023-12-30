import styles from './page.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import OffcanvasExample from '../components/hamburger'

export default function Home() {
  return (
    <>
    <Header/>
    <main className={styles.main}>
    </main>
    <Footer/>
    </>
  )
}
