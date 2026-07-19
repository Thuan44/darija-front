import { useState, useCallback } from "react";
import { generateFeedback } from "../api/generateFeedback";
import type { GenerateFeedbackResponse } from "../types/generation.types";

const FEEDBACK_ERROR_MESSAGE =
  "Une erreur est survenue lors de l'analyse de votre enregistrement.";

export function useFeedbackGeneration() {
  const [feedback, setFeedback] = useState<GenerateFeedbackResponse | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitAudio = useCallback(
    async (audioUrl: string, expectedText: string) => {
      const audioBlob = await fetch(audioUrl).then((res) => res.blob());

      const formData = new FormData();
      formData.append("expected_text", expectedText);
      // Derive file extension from audioBlob.type
      const mimeType = audioBlob.type; // e.g., "audio/webm"
      let extension = "webm";
      if (mimeType) {
        const match = mimeType.match(/audio\/([a-zA-Z0-9]+)/);
        if (match && match[1]) {
          extension = match[1];
        }
      }
      formData.append("audio", audioBlob, `recording.${extension}`);

      setIsLoading(true);
      setError(null);

      try {
        const response = await generateFeedback(formData);
        setFeedback(response);
        return true;
      } catch {
        setError(FEEDBACK_ERROR_MESSAGE);
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  return {
    feedback,
    isLoading,
    error,
    submitAudio,
    reset: () => {
      setFeedback(null);
      setError(null);
      setIsLoading(false);
    },
  };
}
