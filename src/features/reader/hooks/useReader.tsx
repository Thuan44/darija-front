import { useState } from "react";

export function useReader() {
  const [isRecording, setIsRecording] = useState(false);

  return { isRecording };
}
