import styles from "./Input.module.scss";

const Input = (props) => {
  const inputStyle = {
    width: props.width,
  };

  return (
    <input
      className={styles.inputField}
      style={inputStyle}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChangeInput}
    ></input>
  );
};

export default Input;
