import styles from "./CharactersCard.module.scss";
import { useEffect, useState } from "react";

function CharactersCard(props) {
  const [color, setColor] = useState("");
  const status = props.char.status;

  useEffect(() => {
    const statusColor = () => {
      if (status === "Alive") {
        return setColor("green");
      } else if (status === "Dead") {
        return setColor("red");
      } else {
        return setColor("gray");
      }
    };
    statusColor();
  }, [status]);

  return (
    <div className={styles.cardContainer}>
      <img src={props.char.image} alt="char-url" className={styles.imagem} />
      <div className={styles.textsContainer}>
        <p className={styles.name}>{props.char.name}</p>
        <p className={styles.statusName}>
          <span className={styles.titles}>Status: </span>
          <span
            className={styles.status}
            style={{ backgroundColor: color }}
          ></span>
          {status}
        </p>
        <p className={styles.texts}>
          <span className={styles.titles}>Gender: </span>
          {props.char.gender}
        </p>
        <p className={styles.texts}>
          <span className={styles.titles}>Origin: </span>
          {props.char.origin.name}
        </p>
        <p className={styles.texts}>
          <span className={styles.titles}>Location: </span>
          {props.char.location.name}
        </p>
      </div>
    </div>
  );
}

export default CharactersCard;
