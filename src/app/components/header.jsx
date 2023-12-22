import styles from './header.module.css'
import Image from 'next/image'


export default function Header(){
    return (
        <header className={styles.header}>
            <nav className={styles.header__navbar}>            
                <a href="conoce-a">Conoce a</a>
                <a href="doctors">Doctores</a>
                <a href="contact">Contacto</a>
            </nav>
            <Image
                    className={styles.header__logo}
                    src="/img/logos/logo.png"
                    width={190}
                    height={190}
                    alt="Logo de Doctor Who"
                />
            <div className={styles.header__iconsSection}>
                <Image
                    src="/img/icons/facebook.svg"
                    width={24}
                    height={24}
                    alt="Logo de Facebook"
                />
                <Image
                    src="/img/icons/simple-icons_x.svg"
                    width={24}
                    height={24}
                    alt="Logo de Twitter"
                />
                <Image
                    src="/img/icons/mdi_instagram.svg"
                    width={24}
                    height={24}
                    alt="Logo de Instagram"
                />
                <Image
                    src="/img/icons/ic_baseline-tiktok.svg"
                    width={24}
                    height={24}
                    alt="Logo de Tiktok"
                />
            </div>
        </header>
    )
}