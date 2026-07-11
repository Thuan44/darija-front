import { apiClient } from "@/api/client";
import type {
  GenerateTextRequest,
  GenerateTextResponse,
} from "../types/generation.types";

export function generateText(
  payload: GenerateTextRequest,
  signal?: AbortSignal,
): Promise<GenerateTextResponse> {
  return apiClient.post("/generate-text", {
    theme_id: payload.themeId,
    theme_label: payload.themeLabel,
    words: payload.words
  }, { signal });
}
