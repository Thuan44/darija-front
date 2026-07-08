import { useState } from "react";
import franceFlag from "./assets/france.png";
import moroccoStar from "./assets/star.png";
import heroImg from "./assets/hero.png";
import "./styles/App.css";

function App() {
  const [showThemes, setShowThemes] = useState(false);

  const selectTheme = () => {
    setShowThemes(true);
  };

  return (
    <>
      <section id="center" className={showThemes ? "half-grow" : ""}>
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={franceFlag} className="france" alt="France flag" />
          <img src={moroccoStar} className="morocco" alt="Morocco star" />
        </div>
        <div>
          <h1>Coach Darija IA</h1>
          <p>Améliorez votre lecture et votre prononciation !</p>
        </div>
        {!showThemes && (
          <button type="button" className="btn" onClick={selectTheme}>
            Commencer
          </button>
        )}
      </section>

      <div className="ticks"></div>

      {showThemes && (
        <section id="themes">
          <div id="social">
            <h2>Choisissez un thème</h2>
            <p>Nous vous proposerons une liste de mots à apprendre</p>
            <ul>
              <li>
                <Link to="/themes/home">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#github-icon"></use>
                  </svg>
                  Maison
                </Link>
              </li>
              <li>
                <a href="https://chat.vite.dev/" target="_blank">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#discord-icon"></use>
                  </svg>
                  Discord
                </a>
              </li>
              <li>
                <a href="https://x.com/vite_js" target="_blank">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#x-icon"></use>
                  </svg>
                  X.com
                </a>
              </li>
              <li>
                <a href="https://bsky.app/profile/vite.dev" target="_blank">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#bluesky-icon"></use>
                  </svg>
                  Bluesky
                </a>
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
}

export default App;
