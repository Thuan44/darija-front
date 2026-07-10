import type { Word } from "../../../constants/lexicon.ts";

type GenerateTextRequest = {
  themeId: string;
  themeLabel: string;
  words: Pick<Word, "id" | "darija" | "translation">[];
};

type GenerateTextResponse = {
  text: string;
};

export type { GenerateTextRequest, GenerateTextResponse };
