import { apiClient } from "@/api/client";
import type {
  GenerateFeedbackRequest,
  GenerateFeedbackResponse,
} from "../types/generation.types";

export function generateFeedback(
  payload: GenerateFeedbackRequest,
  signal?: AbortSignal,
): Promise<GenerateFeedbackResponse> {
  return apiClient.post(
    "/transcribe",
    payload,
    { signal },
  );
}