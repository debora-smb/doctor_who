import styles from './footer.module.css'
import Image from 'next/image'


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Image
                className={styles.footerImage}
                src="/assets/img/logos/logo-cadena.png"
                width={30}
                height={30}
                alt="Logo Doctor Who Cadena"
            />
            <div className={styles.footerIconsSection}>
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
        </footer>
    )
}