import type { Word } from "@/constants/lexicon.ts";
import { Check } from "lucide-react";
import "./WordSelector.css";

type WordSelectorProps = {
  word: Word;
  checked: boolean;
  onSelect: (word: Word) => void;
};

function WordSelector({ word, checked, onSelect }: WordSelectorProps) {
  return (
    <div className="word-selector">
      <input
        type="checkbox"
        id={word.id}
        className="word-selector__input"
        name={word.darija}
        checked={checked}
        onChange={() => onSelect(word)}
      />
      <label htmlFor={word.id} className="word-selector__label">
        <span className="word-selector__check" aria-hidden>
          <Check size={16} strokeWidth={2.5} />
        </span>
        <span className="word-selector__text">
          <span className="word-selector__darija">{word.darija}</span>
          <small className="word-selector__translation">{word.translation}</small>
        </span>
      </label>
    </div>
  );
}

export default WordSelector;
