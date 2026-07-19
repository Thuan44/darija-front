import { useState, useCallback } from "react";
import { mapApiError } from "../../../api/mapApiError";
import { generateFeedback } from "../api/generateFeedback";
import type { GenerateFeedbackResponse } from "../types/generation.types";

const EXTENSION_BY_MIME: Record<string, string> = {
  "audio/webm": "webm",
  "audio/mp4": "mp4",
  "audio/aac": "m4a",
};

function getExtensionFromMimeType(mimeType: string): string {
  const baseMime = mimeType.split(";")[0]?.trim() ?? "";
  return EXTENSION_BY_MIME[baseMime] ?? "webm";
}

export function useFeedbackGeneration() {
  const [feedback, setFeedback] = useState<GenerateFeedbackResponse | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitAudio = useCallback(
    async (audioUrl: string, expectedText: string, mimeType: string) => {
      const audioBlob = await fetch(audioUrl).then((res) => res.blob());

      const formData = new FormData();
      formData.append("expected_text", expectedText);
      const extension = getExtensionFromMimeType(mimeType);
      formData.append("audio", audioBlob, `recording.${extension}`);

      setIsLoading(true);
      setError(null);

      try {
        const response = await generateFeedback(formData);
        setFeedback(response);
        return true;
      } catch (e) {
        setError(mapApiError(e));
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
