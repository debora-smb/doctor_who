
import styles from './page.module.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Slider from './components/slider/slider'

export default function Home() {
  return (
    <>
    <Header/>
    <main className={styles.main}>
      <Slider/>
    </main>
    <Footer/>
    </>
  )
}
