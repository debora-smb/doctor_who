import styles from './footer.module.css'
import Image from 'next/image'


export default function Footer(){
    return (
        <footer className={styles.footer}>
            <Image
                    className={styles.footerImage}
                    src="/img/logos/logo-cadena.png"
                    width={30}
                    height={30}
                    alt="Logo Doctor Who Cadena"
                />
            <div className={styles.footerIconsSection}>
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
        </footer>
    )
}