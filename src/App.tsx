import { useState } from "react";
import franceFlag from "./assets/france.png";
import moroccoStar from "./assets/star.png";
import heroImg from "./assets/hero.png";
import "./styles/App.css";
import ThemeSelector from "./features/selection/components/ThemeSelector";
import WordSelector from "./features/selection/components/WordSelector";
import { THEMES, LEXICON } from "./constants/lexicon.ts";
import { useTextGeneration } from "./features/generation/hooks/useTextGeneration";
import type { Theme, Word } from "./constants/lexicon.ts";
import { GeneratedText } from "./features/generation/components/GeneratedText.tsx";
import { AudioRecorder } from "./features/audio-recorder/components/AudioRecorder.tsx";
import { generateFeedback } from "./features/feedback/api/generateFeedback.ts";

function App() {
  const [step, setStep] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [selectedWords, setSelectedWords] = useState<Word[]>([]);

  const { generate, text, isLoading, error } = useTextGeneration();

  const handleThemeSelect = (theme: Theme) => {
    setSelectedTheme(theme);
    setSelectedWords([]);
    setStep(2);
  };

  const handleWordSelect = (word: Word) => {
    setSelectedWords((prev) => {
      const current = prev ?? [];
      const isSelected = current.some((w) => w.id === word.id);
      return isSelected
        ? current.filter((w) => w.id !== word.id)
        : [...current, word];
    });
  };

  const selectAllWords = () => {
    if (!selectedTheme) return;
    setSelectedWords(LEXICON[selectedTheme.id]);
  };

  const handleTextGeneration = async () => {
    if (!selectedTheme || selectedWords.length === 0) setStep(3);

    const success = await generate({
      themeId: selectedTheme.id,
      themeLabel: selectedTheme.label,
      words: selectedWords,
    });
    if (success) {
      setStep(3);
    }
  };

  const handleAudioValidated = async (audioUrl: string) => {
    const audioBlob = await fetch(audioUrl).then((res) => res.blob());

    const formData = new FormData();
    formData.append("expected_text", text);
    formData.append("audio", audioBlob, "recording.webm");

    await generateFeedback(formData);
    setStep(4);
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
    3: {
      title: "Votre texte d'entraînement",
      description: "Voici un texte généré à partir de vos mots",
    },
    4: {
      title: "Les conseils du coach",
      description:
        "Voici un retour constructif qui vous permettra de vous améliorer",
    },
  } as const;

  const content = STEP_CONTENT[step as 1 | 2 | 3 | 4];

  return (
    <>
      <section id="center" className={step !== 0 ? "half-grow" : ""}>
        {step === 0 && (
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
          {step === 0 && (
            <p>Améliorez votre lecture et votre prononciation !</p>
          )}
        </div>
        {step === 0 && (
          <button
            type="button"
            className="btn btn-accent"
            onClick={() => setStep(1)}
          >
            Commencer
          </button>
        )}
      </section>

      {step > 0 && (
        <section id="themes">
          <div>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            {step === 1 && (
              <ul>
                {Object.values(THEMES).map((theme: Theme) => (
                  <li key={theme.id}>
                    <ThemeSelector theme={theme} onSelect={handleThemeSelect} />
                  </li>
                ))}
              </ul>
            )}
            {step === 2 && selectedTheme && (
              <div>
                <div className="action-buttons">
                  <button className="btn" onClick={() => setStep(step - 1)}>
                    Changer de thème
                  </button>
                  <button className="btn" onClick={selectAllWords}>
                    Tout sélectionner
                  </button>
                </div>
                <ul className="words">
                  {LEXICON[selectedTheme.id].map((word: Word) => (
                    <li key={word.id}>
                      <WordSelector
                        key={`word-selector-${word.id}`}
                        word={word}
                        onSelect={handleWordSelect}
                        checked={
                          selectedWords?.some((w) => w.id === word.id) ?? false
                        }
                      />
                    </li>
                  ))}
                </ul>
                {error && (
                  <div
                    className="error-message"
                    style={{ color: "red", marginTop: "32px" }}
                  >
                    {error}
                  </div>
                )}
                {selectedWords.length > 0 && (
                  <button
                    className="btn btn-accent generate-button"
                    onClick={() => handleTextGeneration()}
                    disabled={isLoading}
                  >
                    {isLoading ? "Génération..." : "Générer un texte"}
                  </button>
                )}
              </div>
            )}
            {step === 3 && text && (
              <>
                <GeneratedText text={text} />
                <AudioRecorder onAudioValidated={handleAudioValidated} />
              </>
            )}
          </div>
        </section>
      )}
    </>
  );
}

export default App;
