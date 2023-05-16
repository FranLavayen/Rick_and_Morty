import styles from "./Card.module.css"

export default function Card({ name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={styles.conteiner}>
      <div className={styles.conteiner.button}>
         <button onClick={onClose}>X</button>
        
        <div>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
         <img src={image} alt='imagen' />
      </div>
      </div>
      </div>
   );
}
