import { apiClient } from "@/api/client";

type GenerateTextRequest = {
  themeId: string;
  themeLabel: string;
  words: Pick<Word, "id", "darija" | " translation">[];
};

type GenerateTextResponse = {
  text: string;
};

export function generateText(
  payload: GenerateTextRequest,
  signal?: AbortSignal,
): Promise<GenerateTextResponse> {
  return apiClient.post("/generate-text", payload, { signal });
}
