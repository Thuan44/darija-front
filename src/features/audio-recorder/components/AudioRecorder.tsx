import { Mic, Square } from "lucide-react";
import { useRef, useState } from "react";

export function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState(false)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    audioChunksRef.current = [];
    setAudioUrl(null);

    try {
      // 1. Ask access to microphone
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // 2. Init MediaRecorder
      // Note: audio/webm is natively supported by Chrome and Firefox
      const options = {
        mimeType: "audio/webm",
      };

      const mediaRecorder = new MediaRecorder(stream, options);

      mediaRecorderRef.current = mediaRecorder;

      // 3. Capture audio fragments
      mediaRecorder.ondataavailable = (event: BlobEvent) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      // 4. Handle end of recording
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        mediaRecorder.stream.getTracks().forEach((track) => track.stop());
      };

      // Start recording
      mediaRecorder.start();
      setIsRecording(true);
    } catch (e) {
      setError(true)
      console.error("Erreur lors de l'accès au microphone :", e);
      alert("Impossible d'accéder au microphone.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="generated-text-actions-wrapper">
      {error && (
        <div className="error-message" style={{ color: "red", marginBottom: "1rem" }}>
          Une erreur est survenue lors de l'accès au microphone. Veuillez vérifier les permissions de votre navigateur.
        </div>
      )}
 
      <div className="generated-text-actions">
        {/* {!isRecording && (
          <button type="button" className="btn">
            <Volume2 />
          </button>
        )} */}
        <button
          type="button"
          className="btn"
          aria-label={isRecording ? "Arrêter l'enregistrement audio" : "Commencer l'enregistrement audio"}
          onClick={isRecording ? stopRecording : startRecording}
        >
          {isRecording ? <Square /> : <Mic />}
        </button>
   
      </div>
      <audio src={audioUrl} controls />
    </div>
  );
}
