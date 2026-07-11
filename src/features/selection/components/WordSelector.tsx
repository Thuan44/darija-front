import type { Word } from "@/constants/lexicon.ts";

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
        name={word.darija}
        checked={checked}
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
