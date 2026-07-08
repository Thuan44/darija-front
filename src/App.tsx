import { useState } from "react";
import franceFlag from "./assets/france.png";
import moroccoStar from "./assets/star.png";
import heroImg from "./assets/hero.png";
import "./styles/App.css";
import ThemeSelector from "./features/selection/components/ThemeSelector";
import WordSelector from "./features/selection/components/WordSelector";
import { THEMES, LEXICON } from "./constants/lexicon.ts";
import type { Word } from "../constants.ts";

function App() {
  const [step, setStep] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [selectedWords, setSelectedWords] = useState<Word[] | []>();

  const handleThemeSelect = (theme: Theme) => {
    setSelectedTheme(theme);
    setStep(2);
  };

  const STEP_CONTENT = {
    1: {
      title: "Choisissez un thème",
      description: "Nous vous proposerons une liste de mots à apprendre",
    },
    2: {
      title: "Choisissez vos mots",
      description: selectedTheme
        ? `Thème « ${selectedTheme.label} » - sélectionnez les mots à apprendre`
        : "Sélectionnez les mots à apprendre",
    },
  } as const;

  const content = STEP_CONTENT[step as 1 | 2];

  return (
    <>
      <section id="center" className={step !== 0 ? "half-grow" : ""}>
        {step == 0 && (
          <div className="hero">
            <img
              src={heroImg}
              className="base"
              width="170"
              height="179"
              alt=""
            />
            <img src={franceFlag} className="france" alt="France flag" />
            <img src={moroccoStar} className="morocco" alt="Morocco star" />
          </div>
        )}

        <div>
          <h1>Coach Darija IA</h1>
          {step == 0 && <p>Améliorez votre lecture et votre prononciation !</p>}
        </div>
        {step == 0 && (
          <button type="button" className="btn" onClick={() => setStep(1)}>
            Commencer
          </button>
        )}
      </section>

      {step > 0 && (
        <section id="themes">
          <div id="social">
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            {step === 1 && (
              <ul>
                {Object.values(THEMES).map((theme: THEME) => (
                  <li key={theme.id}>
                    <ThemeSelector theme={theme} onSelect={handleThemeSelect} />
                  </li>
                ))}
              </ul>
            )}
            {step === 2 && selectedTheme && (
              <ul className="words">
                {LEXICON[selectedTheme.id].map((word: Word) => (
                  <li key={word.id}>
                    <WordSelector key={word.id} word={word} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}
    </>
  );
}

export default App;
