import { useState, useCallback } from "react";
import type { GenerateTextRequest } from "../types/generation.types";
import { generateText } from "../api/generateText";

export function useTextGeneration() {
  const [text, setText] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = useCallback(async (payload: GenerateTextRequest) => {
    setIsLoading(true);
    setError(null);

    try {
      const { text } = await generateText(payload);
      setText(text);
      return true
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur inconnue");
      return false
    } finally {
      setIsLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setText(null);
    setError(null);
    setIsLoading(false);
  }, []);

  return { text, isLoading, error, generate, reset };
}
