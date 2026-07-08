import type { Word } from "../constants.ts";

function WordSelector({ word }: Word) {
  return (
    <div>
      <input type="checkbox" id={word.id} name={word.darija} />
      <label htmlFor={word.id}>{word.darija}</label>
    </div>
  );
}

export default WordSelector;
