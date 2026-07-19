const CANDIDATE_MIME_TYPES = [
  "audio/webm;codecs=opus",
  "audio/webm",
  "audio/mp4",
  "audio/aac",
] as const;

/**
 * Returns the first MediaRecorder MIME type supported by the browser,
 * or `undefined` to let the browser pick its default.
 */
export function getSupportedMimeType(): string | undefined {
  if (typeof MediaRecorder === "undefined") {
    return undefined;
  }

  return CANDIDATE_MIME_TYPES.find((type) =>
    MediaRecorder.isTypeSupported(type),
  );
}
