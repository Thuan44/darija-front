import { Volume2, Mic, Square } from "lucide-react";
import { useReader } from "../hooks/useReader";

export function Reader() {
    const { isRecording, setIsRecording } = useReader();
    
  return (
    <div className="generated-text-actions">
      {!isRecording && (
        <button type="button" className="btn">
          <Volume2 />
        </button>
      )}
      <button type="button" className="btn">
        {isRecording ? <Square /> : <Mic />}
      </button>
    </div>
  );
}
