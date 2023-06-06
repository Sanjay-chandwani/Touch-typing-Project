import React, { useEffect, useState, useRef } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [randomSentence, setSentence] = useState("");
  const [keyCount, setKeyCount] = useState(0);
  const [keyCounted, setKeyCounted] = useState(false);
  const [accuracy, setAccuracy] = useState(0);
  const inputRef = useRef(null);

  function handleKeyCount() {
    if (isCorrect && randomSentence.length === inputValue.length) {
      setKeyCounted(true);
      setInputValue("");
      const newAccuracy = (
        (randomSentence.length / (keyCount + 1)) *
        100
      ).toFixed(2);
      setAccuracy(newAccuracy);
    }
    setKeyCount(keyCount + 1);
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const sentences = [
    "ladj asfj dlflka sd",
    "adf jkl asd fjkl",
    "jlad fsjla sd",
    "dkfj sadfj kl",
    "kasd fjk las",
  ];

  function getRandomSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    console.log(randomIndex);
    setSentence(sentences[randomIndex]);
  }

  useEffect(() => {
    getRandomSentence();
  }, []);

  function retryHandler() {
    setKeyCount(0);
    setKeyCounted(false);
    setAccuracy(0);
    getRandomSentence();
    setInputValue("");
    inputRef.current.focus();
  }

  const isCorrect = inputValue === randomSentence.slice(0, inputValue.length);

  return (
    <div id="wrapper">
      <div className="touch-test">
        <h2>Touch Typing Project</h2>
        <p>Type the sentence below:</p>
        <h2 style={{ color: isCorrect ? "#1F8A70" : "#F96666" }}>
          {randomSentence}
        </h2>
        <input
          type="text"
          placeholder="Enter the above words"
          id="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyUp={handleKeyCount}
          ref={inputRef}
          style={{
            backgroundColor: isCorrect ? "lightgreen" : "pink",
            color: "black",
          }}
        />

        {keyCounted ? (
          <div id="result">
            <p>keyCount: {keyCount}</p>
            <p>Accuracy: {accuracy}</p>

            <button className="btn" onClick={retryHandler}>
              Retry
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
