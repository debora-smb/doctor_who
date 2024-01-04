import styles from './header.module.css'
import Image from 'next/image'
import BurgerMenu from '../burger/burger'
import SearchBar from '../searchbar/searchbar'


export default function Header({ handleSearchChange }) {
    return (
        <header className={styles.header}>
            <nav className={styles.headerNavbar}>
                <a href="conoce-a">Conoce a</a>
                <a href="doctors">Doctores</a>
                <a href="contact">Contacto</a>
            </nav>
            <a className={styles.headerLogo} href="http://localhost:3000/">
                <Image
                    src="/assets/img/logos/logo.png"
                    width={150}
                    height={150}
                    alt="Logo de Doctor Who"
                />
            </a>
            <SearchBar handleSearchChange={handleSearchChange} />

            <div className={styles.headerIconsSection}>
                <a href="#">
                    <Image
                        src="/assets/img/icons/facebook.svg"
                        width={20}
                        height={20}
                        alt="Logo de Facebook"
                    />
                </a>
                <a href="#">
                    <Image
                        src="/assets/img/icons/simple-icons_x.svg"
                        width={20}
                        height={20}
                        alt="Logo de Twitter"
                    />
                </a>
                <a href="#">
                    <Image
                        src="/assets/img/icons/mdi_instagram.svg"
                        width={24}
                        height={24}
                        alt="Logo de Instagram"
                    />
                </a>
                <a href="#">
                    <Image
                        src="/assets/img/icons/ic_baseline-tiktok.svg"
                        width={24}
                        height={24}
                        alt="Logo de Tiktok"
                    />
                </a>
            </div>
            <div className={styles.burgerMenu}><BurgerMenu /></div>
        </header>
    )
}