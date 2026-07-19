import { Mic, Square } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { getSupportedMimeType } from "../utils/getSupportedMimeType";

type AudioRecorderProps = {
  onAudioValidated?: (audioUrl: string, mimeType: string) => void;
  playbackOnly?: boolean;
  playbackUrl?: string | null;
};

export function AudioRecorder({
  onAudioValidated,
  playbackOnly = false,
  playbackUrl,
}: AudioRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const mimeTypeRef = useRef<string | undefined>(undefined);
  const urlTransferredRef = useRef(false);

  // Cleanup microphone on unmouting
  useEffect(() => {
    return () => {
      mediaRecorderRef.current?.stream
        ?.getTracks()
        .forEach((track) => track.stop());
    };
  }, []);
  // Cleanup URL blob (skip if ownership was transferred to parent)
  useEffect(() => {
    if (!audioUrl) return;
    return () => {
      if (!urlTransferredRef.current) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

  const startRecording = async () => {
    audioChunksRef.current = [];
    setAudioUrl(null);

    try {
      // 1. Ask access to microphone
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // 2. Init MediaRecorder with the best supported MIME type
      const mimeType = getSupportedMimeType();
      mimeTypeRef.current = mimeType;
      const mediaRecorder = mimeType
        ? new MediaRecorder(stream, { mimeType })
        : new MediaRecorder(stream);

      mediaRecorderRef.current = mediaRecorder;

      // 3. Capture audio fragments
      mediaRecorder.ondataavailable = (event: BlobEvent) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      // 4. Handle end of recording
      mediaRecorder.onstop = () => {
        const blobType =
          mimeTypeRef.current ?? (mediaRecorder.mimeType || "audio/webm");
        const audioBlob = new Blob(audioChunksRef.current, {
          type: blobType,
        });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        mediaRecorder.stream.getTracks().forEach((track) => track.stop());
      };

      // Start recording
      mediaRecorder.start();
      setIsRecording(true);
    } catch (e) {
      setError(true);
      console.error("Erreur lors de l'accès au microphone :", e);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleAudioValidation = () => {
    if (!audioUrl) return;
    urlTransferredRef.current = true;
    onAudioValidated?.(audioUrl, mimeTypeRef.current ?? "audio/webm");
    setAudioUrl(null);
  };

  if (playbackOnly && playbackUrl) {
    return (
      <div className="generated-text-actions-wrapper audio-playback">
        <p className="audio-playback-label">Votre enregistrement</p>
        <div className="audio-controls-wrapper">
          <audio src={playbackUrl} controls />
        </div>
      </div>
    );
  }

  return (
    <div className="generated-text-actions-wrapper">
      {error && (
        <div
          className="error-message"
          style={{ color: "red", marginTop: "32px" }}
        >
          Une erreur est survenue lors de l'accès au microphone. Veuillez
          vérifier les permissions de votre navigateur.
        </div>
      )}

      <div className="generated-text-actions">
        <button
          type="button"
          className="btn"
          aria-label={
            isRecording
              ? "Arrêter l'enregistrement audio"
              : "Commencer l'enregistrement audio"
          }
          onClick={isRecording ? stopRecording : startRecording}
        >
          {isRecording ? <Square /> : <Mic />}
        </button>
      </div>
      {audioUrl && (
        <div className="audio-controls-wrapper">
          <audio src={audioUrl} controls />
          <button
            className="btn btn-accent"
            style={{ marginTop: "16px" }}
            onClick={handleAudioValidation}
          >
            Valider l'audio
          </button>
        </div>
      )}
    </div>
  );
}
