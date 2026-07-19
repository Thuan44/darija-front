import "./ErrorMessage.css";

type ErrorMessageProps = {
  message: string;
  onRetry?: () => void;
  retryLabel?: string;
};

export function ErrorMessage({
  message,
  onRetry,
  retryLabel = "Réessayer",
}: ErrorMessageProps) {
  return (
    <div className="error-message" role="alert">
      <p className="error-message-text">{message}</p>
      {onRetry && (
        <button type="button" className="btn" onClick={onRetry}>
          {retryLabel}
        </button>
      )}
    </div>
  );
}
