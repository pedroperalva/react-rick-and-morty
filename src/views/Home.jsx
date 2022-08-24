import styles from "./Home.module.scss";
import React, { useEffect } from "react";
import { getCharactersList } from "../store/actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CharactersCard from "../components/CharactersCard/CharactersCard";
import Button from "../components/Button/Button";

function Home(props) {
  useEffect(() => {
    props.getCharactersList();
    // eslint-disable-next-line
  }, []);

  const handleNextPage = () => {
    const path = props.next.split("/");
    props.getCharactersList(path[path.length - 1]);
  };

  const handlePrevPage = () => {
    const path = props.prev.split("/");
    props.getCharactersList(path[path.length - 1]);
  };

  return (
    <div className={styles.mainContainer}>
      <img
        src={require("../assets/Rick-And-Morty-Logo.png")}
        alt="logo"
        className={styles.logo}
      />
      <div className={styles.btnContainer}>
        <Button onClickBtn={handlePrevPage} text="PREVIOUS" />
        <Button onClickBtn={handleNextPage} text="NEXT" />
      </div>
      <div className={styles.cardsContainer}>
        {props.charactersList &&
          props.charactersList.map((char) => {
            return <CharactersCard char={char} key={char.id} />;
          })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  charactersList: state.characters.charactersList,
  isLoading: state.characters.isLoading,
  next: state.characters.next,
  prev: state.characters.prev,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getCharactersList,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);