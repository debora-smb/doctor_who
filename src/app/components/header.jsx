import styles from './header.module.css'
import Image from 'next/image'
import FormExample from './searchbar'


export default function Header(){
    return (
        <header className={styles.header}>
            <nav className={styles.headerNavbar}>            
                <a href="conoce-a">Conoce a</a>
                <a href="doctors">Doctores</a>
                <a href="contact">Contacto</a>
            </nav>
            <Image
                    className={styles.headerLogo}
                    src="/img/logos/logo.png"
                    width={150}
                    height={150}
                    alt="Logo de Doctor Who"
                />
            <div className={styles.headerSearchbar}>
            <Image
                    src="/img/icons/material-symbols-light_search.svg"
                    width={20}
                    height={20}
                    alt="Lupa"
                />
            <FormExample/>
            </div>
            <div className={styles.headerIconsSection}>
                <Image
                    src="/img/icons/facebook.svg"
                    width={20}
                    height={20}
                    alt="Logo de Facebook"
                />
                <Image
                    src="/img/icons/simple-icons_x.svg"
                    width={20}
                    height={20}
                    alt="Logo de Twitter"
                />
                <Image
                    src="/img/icons/mdi_instagram.svg"
                    width={20}
                    height={20}
                    alt="Logo de Instagram"
                />
                <Image
                    src="/img/icons/ic_baseline-tiktok.svg"
                    width={20}
                    height={20}
                    alt="Logo de Tiktok"
                />
            </div>
        </header>
    )
}