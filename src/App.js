import {useState, useEffect} from "react";

import imageDesktop from "./images/pattern-divider-desktop.svg"
import imageMobile from "./images/pattern-divider-mobile.svg"
import dice from "./images/icon-dice.svg"

function App() {
  const [text, setText] = useState([]);

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data);

    setText(data.slip);

    console.log(text);
  }

  useEffect(() => {
    fetchAdvice()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  return (
      <div className="app">
    <div className="container">
      <h1>{text.id}</h1>
      <p>{text.advice}</p>

      <picture>
        <source media="(min-width: 768px)" srcSet={imageDesktop}/>
        <img src={imageMobile} alt=""/>
      </picture>
        <div>
            <button onClick={fetchAdvice}>
                <img src={dice} alt="" />
            </button>
        </div>
    </div>
      </div>
  );
}

export default App;
