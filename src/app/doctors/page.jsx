import styles from './page.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import BurgerMenu from '../components/burger'

export default function Home() {
  return (
    <>
    <BurgerMenu/>
    <main className={styles.main}>
    </main>
    </>
  )
}
