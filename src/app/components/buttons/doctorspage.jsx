import styles from './button.module.css'

export default function ButtonDoctors (){
    const redirectToDrWho = () => {
        window.location.href = 'https://www.doctorwho.tv/';
      };
    return (
        <button className={styles.buttonDoctors} onClick={redirectToDrWho}>Ver más
        </button>
    )
}