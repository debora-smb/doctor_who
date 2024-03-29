import styles from './button.module.css'

export default function Button (){
    const redirectToDrWho = () => {
        window.location.href = 'https://www.doctorwho.tv/';
    }
    
    return (
        <button className={styles.button} onClick={redirectToDrWho}>Ver ahora
        </button>
    )
}