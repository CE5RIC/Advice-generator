import imageDesktop from "./images/pattern-divider-desktop.svg"
import imageMobile from "./images/pattern-divider-mobile.svg"
import dice from "./images/icon-dice.svg"

function App() {
  return (
    <div className="container">
      <h1>lorem, ipsum</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, minus!</p>

      <picture>
        <source media="(min-width: 768px)" srcSet={imageDesktop}/>
        <img src={imageMobile} alt=""/>
      </picture>
        <div>
            <button>
                <img src={dice} alt="" />
            </button>
        </div>
    </div>
  );
}

export default App;
