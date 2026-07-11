import { DEMO_TEXT } from "@/constants/lexicon";

export function GeneratedText({ text }: { text?: string }) {
  return (
    <div className="generated-text">
      {text
        ? text
        : DEMO_TEXT}
    </div>
  );
}
