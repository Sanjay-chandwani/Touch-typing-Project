import React, { useEffect, useState } from "react";

const TouchTypingProject = () => {
    const [inputValue, setInputValue] = useState("");
    const [randomSentence, setSentence] = useState("");
    const [keyCount, setKeyCount] = useState(0);
    const [keyCounted, setKeyCounted] = useState(false);
    const [accuracy, setAccuracy] = useState(0);



    function handleKeyCount() {
        if (isCorrect && randomSentence.length === inputValue.length) {
            setKeyCounted(true);
            setInputValue("")
            const newAccuracy = ((randomSentence.length / (keyCount + 1)) * 100).toFixed(2);
            setAccuracy(newAccuracy);
        }
        setKeyCount(keyCount + 1);
    }




    const handleInputChange = (e) => {

        setInputValue(e.target.value);
    };
    const sentences = [
        "ladjasfj dlflkasd ",
        "adfjkl asdfjkl",
        "jladfsjlasd",
        "dkfjsadfjkl",
        "kasdfjklas",
    ];

    function getRandomSentence() {
        const randomIndex = Math.floor(Math.random() * sentences.length);
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
      }
      






    const isCorrect = inputValue === randomSentence.slice(0, inputValue.length);

    return (
        <div id="wrapper">
            <div className="touch-test">
            <h2>Touch Typing Project</h2>
            <p>Type the sentence below:</p>
            <h2 style={{ color: isCorrect ? "green" : "red" }}>{randomSentence}</h2>
            <textarea
                value={inputValue}
                onChange={handleInputChange} onKeyUp={handleKeyCount}
                style={{
                    backgroundColor: isCorrect ? "lightgreen" : "pink",
                    color: "black",
                }}
            ></textarea>

            {
                keyCounted ? (<div><p>keyCount : {keyCount}</p>  <p>Accuracy : {accuracy}</p> <button onClick={() => {retryHandler()}}>Retry</button> </div>) : ("")
            }
            </div>
            
        </div>
        
    );
};

export default TouchTypingProject;
