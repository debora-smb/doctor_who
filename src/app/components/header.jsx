import styles from './header.module.css';


export default function Header(){
    return (
        <header className={styles.header}>
            <nav className={styles.header__navbar}>            
                <a href="conoce-a">Conoce a</a>
                <a href="doctors">Doctores</a>
                <a href="contact">Contacto</a>
            </nav>
        </header>
    )
}