import styles from './button.module.css'

export default function ButtonKnowPage (){
    const redirectToDrWho = () => {
        window.location.href = 'https://www.doctorwho.tv/';
      };
    return (
        <button className={styles.buttonKnowPage} onClick={redirectToDrWho}>Ver más
        </button>
    )
}