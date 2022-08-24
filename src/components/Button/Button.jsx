import styles from "./Button.module.scss";

function Button(props) {
  return (
    <button onClick={props.onClickBtn} className={styles.btn}>
      {props.text}
    </button>
  );
}

export default Button;
