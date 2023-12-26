import styles from './page.module.css'
import Header from './components/header'
import Footer from './components/footer'
import UncontrolledExample from './components/slider'

export default function Home() {
  return (
    <>
    <Header/>
    <main className={styles.main}>
      <UncontrolledExample/>
    </main>
    <Footer/>
    </>
  )
}
