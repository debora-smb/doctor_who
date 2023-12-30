import React from "react";
import styles from './burger.module.css'
import SearchBar from "./searchbar";
import Image from 'next/image'

export default function BurgerMenu() {
    return (
        <div className={styles.headerMobile}>
            <Image
                    className={styles.headerLogo}
                    src="/img/logos/logo.png"
                    width={95}
                    height={96}
                    alt="Logo de Doctor Who"
                />
            <div className={styles.navItems}>
                <a href="/conoce-a">Conoce a</a>
                <a href="/doctors">Doctores</a>
                <a href="/contact">Contacto</a>
                <SearchBar />
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

            </div>
            <div className={styles.navToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>


    )
}

