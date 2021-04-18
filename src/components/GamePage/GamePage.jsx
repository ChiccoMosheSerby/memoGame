import React, { useState, useEffect } from "react";
import { randomFrom0To5 } from "../../util/randomFrom0To5";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import TopInfo from "./TopInfo/TopInfo";
import { Container, StyledBoard, Play } from "./GamePage.style";
import { colors, notes } from "../../data/color_note";
import PlayBoard from "./PlayBoard";
import { sortByKey } from "../../util/sort";
import SideBar from "../Sidabar/SideBar";

const GamePage = ({ userName }) => {
  const [userMode, setUserMode] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [playArr, setPlayArr] = useState([]);
  const [userArr, setUserArr] = useState([]);
  const [noSound, setNoSound] = useState(false);
  // const [history, setHistory] = useState([]);
  const [bestScore, setBestSCore] = useLocalStorage(
    "bestScore",
    playArr.length * 10
  );
  const [history, setHistory] = useLocalStorage("history", [
    [{ score: null, currentTime: null, userName: null }],
  ]);
  const isNewGame = playArr.length === 0;

  useEffect(() => {
    sortByKey(history, "score");
  }, [history]);

  useEffect(() => {
    if ((playArr.length - 1) * 10 > Number(bestScore)) {
      if (isNewGame) {
        setBestSCore(0);
      } else {
        setBestSCore((playArr.length - 1) * 10);
      }
    }
  }, [playArr.length, isNewGame, bestScore, setBestSCore, userName]);

  const play = () => {
    setUserArr([]);
    const newArr = [...playArr];
    const randomIdx = randomFrom0To5();
    newArr.push(colors[randomIdx]);
    setPlayArr(newArr);
    run(newArr);
  };

  const run = (arr) => {
    setUserMode(false);
    arr.map((item, idx) =>
      setTimeout(() => {
        setTimeout(() => {
          setSelectedColor("");
        }, 300);
        setSelectedColor(item);
        !noSound && notes[colors.indexOf(item)].play();
        setUserMode(true);
      }, 1000 * idx)
    );
  };

  const reset = () => {
    setPlayArr([]);
    const currentTime = new Date().toLocaleString() + "";
    const score = (playArr.length - 1) * 10;
    let newHistory = JSON.parse(localStorage.getItem("history"));
    if (newHistory === null) {
      newHistory = [];
    }
    newHistory.push({ currentTime, score, userName: userName });
    sortByKey(newHistory, "score");
    setHistory(newHistory);
  };

  const click = (idx) => {
    !noSound && notes[idx].play();
    const newArr = [...userArr];
    newArr.push(colors[idx]);
    setUserArr((prev) => [...prev, colors[idx]]);
    validattion(newArr, newArr[newArr.length - 1], newArr.length - 1);
  };

  const validattion = (newArr, item, index) => {
    if (item !== playArr[index]) {
      !noSound && notes[0].play();
      setUserMode(false);
      setUserArr([]);
      reset();
    } else {
      if (newArr.length === playArr.length) {
        setTimeout(() => {
          setUserMode(false);
          play();
        }, 800);
      }
    }
  };

  return (
    <Container>
      <TopInfo
        noSound={noSound}
        toggleSound={() => setNoSound((prev) => !prev)}
        bestScore={bestScore}
        currentScore={
          (playArr.length - 1) * 10 < 0 ? 0 : (playArr.length - 1) * 10
        }
      />
      <StyledBoard>
        <PlayBoard
          userMode={userMode}
          click={click}
          selectedColor={selectedColor}
        />
        {isNewGame && (
          <Play>
            <img
              alt="play the game button"
              src="https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png"
              onClick={play}
            />
          </Play>
        )}
      </StyledBoard>
      <SideBar userName={userName} />
    </Container>
  );
};

export default GamePage;
