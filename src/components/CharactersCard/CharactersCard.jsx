import styles from "./CharactersCard.module.scss";
import { useEffect, useState } from "react";

function CharactersCard(props) {
  const [color, setColor] = useState("");

  useEffect(() => {
    statusColor();
    // eslint-disable-next-line
  }, []);
  const statusColor = () => {
    if (props.char.status === "Alive") {
      return setColor("green");
    } else if (props.char.status === "Dead") {
      return setColor("red");
    } else {
      return setColor("gray");
    }
  };

  return (
    <div className={styles.cardContainer}>
      <img src={props.char.image} alt="char-url" className={styles.imagem} />
      <div>
        <p className={styles.name}>{props.char.name}</p>
        <p className={styles.statusName}>
          <span className={styles.titles}>Status: </span>
          <span
            className={styles.status}
            style={{ backgroundColor: color }}
          ></span>
          {props.char.status}
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
