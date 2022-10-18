import styles from "./Home.module.scss";
import React, { useEffect } from "react";
import {
  getCharactersList,
  changeInput,
  getCharactersByName,
} from "../store/actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CharactersCard from "../components/CharactersCard/CharactersCard";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import useWindowDimensions from "../composables/useWindowDimensions";

function Home(props) {
  const getList = props.getCharactersList;
  useEffect(() => {
    getList();
  }, [getList]);

  const { width } = useWindowDimensions();

  const handleNextPage = () => {
    console.log(props.next);
    const path = props.next.split("/");
    console.log(path);
    getList(path[path.length - 1]);
  };

  const handlePrevPage = () => {
    const path = props.prev.split("/");
    getList(path[path.length - 1]);
  };

  const handleInput = (e) => {
    props.changeInput(e.target.value);
  };

  const handleSearch = () => {
    props.getCharactersByName();
  };

  return (
    <div className={styles.mainContainer}>
      <img
        src={require("../assets/Rick-And-Morty-Logo.png")}
        alt="logo"
        className={styles.logo}
      />
      {props.charactersList && props.charactersList.length >= 20 ? (
        <div className={styles.btnContainer}>
          <Button onClickBtn={handlePrevPage} text="PREVIOUS" />
          <Button onClickBtn={handleNextPage} text="NEXT" />
        </div>
      ) : (
        <></>
      )}
      <div className={styles.searchContainer}>
        <Input
          placeholder="Enter a character name"
          width={width >= 768 ? "500px" : "90%"}
          onChangeInput={handleInput}
        />
        <Button onClickBtn={handleSearch} text="SEARCH" />
      </div>
      {props.isLoading ? (
        <div>OI</div>
      ) : (
        <div className={styles.cardsContainer}>
          {props.charactersList &&
            props.charactersList.map((char) => {
              return <CharactersCard char={char} key={char.id} />;
            })}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  charactersList: state.characters.charactersList,
  isLoading: state.characters.isLoading,
  next: state.characters.next,
  prev: state.characters.prev,
  inputData: state.inputData,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getCharactersList,
      changeInput,
      getCharactersByName,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
