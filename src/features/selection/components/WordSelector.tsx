import type { Word } from "../constants.ts";

type WordSelectorProps = {
  word: Word;
  onSelect: (word: Word) => void;
};

function WordSelector({ word, onSelect }: WordSelectorProps) {
  return (
    <div className="word-selector">
      <input
        type="checkbox"
        id={word.id}
        name={word.darija}
        onChange={() => onSelect(word)}
      />
      <label htmlFor={word.id} className="word-selector-label">
        <span>{word.darija}</span>
        <small>{word.translation}</small>
      </label>
    </div>
  );
}

export default WordSelector;
