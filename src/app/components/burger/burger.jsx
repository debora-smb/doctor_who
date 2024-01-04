"use client"
import React, {useState} from 'react';
import styles from "./burger.module.css"
import SearchBarMobile from '../searchbar/searchbarmobile';

export default function BurgerMenu() {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={styles.headerMobile}>
            <a href="http://localhost:3000/">
                <img
                    className={styles.headerMobileLogo}
                    src="/assets/img/logos/logo.png"
                    alt="Logo de Doctor Who"
                />
            </a>    
            <div className={`${styles.menuItems} ${isOpen && styles.open}`}>
                <a href="conoce-a"> Conoce a</a>
                <a href="/doctors"> Doctores</a>
                <a href="/contact"> Contacto</a>
                <div className={styles.mobileSearch}>
                    <SearchBarMobile />
                </div>
                <div className={styles.menuMobileIcons}>
                    <a href="#">
                        <img
                            src="/assets/img/icons/facebook.svg"
                            alt="Logo de Facebook"
                        /></a>
                    <a href="#">
                        <img
                            src="/assets/img/icons/simple-icons_x.svg"
                            alt="Logo de Twitter"
                        /></a>
                    <a href="#">
                        <img
                            src="/assets/img/icons/mdi_instagram.svg"
                            alt="Logo de Instagram"
                        /></a>
                    <a href="#">
                        <img
                            src="/assets/img/icons/ic_baseline-tiktok.svg"
                            alt="Logo de Tiktok"
                        /></a>
                </div>

            </div>
            <div className={`${styles.menuToggle} ${isOpen && styles.open}`} onClick={() => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
