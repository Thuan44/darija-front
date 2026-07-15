import type { FeedbackAnalysis } from "../types/generation.types";

type FeedbackProps = {
  analysis: FeedbackAnalysis;
  transcribedText?: string;
};

type ScoreMetricProps = {
  label: string;
  value: number;
};

function ScoreMetric({ label, value }: ScoreMetricProps) {
  return (
    <div className="feedback-metric">
      <div className="feedback-metric-header">
        <span className="feedback-metric-label">{label}</span>
        <span className="feedback-metric-value">{value}/100</span>
      </div>
      <div className="feedback-progress" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
        <div className="feedback-progress-bar" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export function Feedback({ analysis, transcribedText }: FeedbackProps) {
  const {
    score_global,
    fluidite,
    prononciation,
    fidelite_texte,
    points_forts,
    erreurs,
    conseils,
  } = analysis;

  return (
    <div className="feedback">
      <div className="feedback-score-card">
        <p className="feedback-score-label">Score global</p>
        <p className="feedback-score-value">{score_global}</p>
        <div
          className="feedback-progress feedback-progress-global"
          role="progressbar"
          aria-valuenow={score_global}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Score global"
        >
          <div
            className="feedback-progress-bar"
            style={{ width: `${score_global}%` }}
          />
        </div>
      </div>

      <div className="feedback-metrics">
        <ScoreMetric label="Fluidité" value={fluidite} />
        <ScoreMetric label="Prononciation" value={prononciation} />
        <ScoreMetric label="Fidélité au texte" value={fidelite_texte} />
      </div>

      {transcribedText && (
        <section className="feedback-section">
          <h3 className="feedback-section-title">Texte transcrit</h3>
          <p className="feedback-transcription">{transcribedText}</p>
        </section>
      )}

      {points_forts.length > 0 && (
        <section className="feedback-section">
          <h3 className="feedback-section-title">Points forts</h3>
          <ul className="feedback-list feedback-list-strengths">
            {points_forts.map((point, index) => (
              <li key={`strength-${index}`}>{point}</li>
            ))}
          </ul>
        </section>
      )}

      {erreurs.length > 0 && (
        <section className="feedback-section">
          <h3 className="feedback-section-title">Erreurs détectées</h3>
          <ul className="feedback-errors">
            {erreurs.map((erreur, index) => (
              <li key={`error-${index}`} className="feedback-error-card">
                <div className="feedback-error-header">
                  <code className="feedback-error-word">{erreur.mot}</code>
                  <span className="feedback-error-type">{erreur.type}</span>
                </div>
                <p className="feedback-error-detail">{erreur.detail}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {conseils.length > 0 && (
        <section className="feedback-section">
          <h3 className="feedback-section-title">Conseils du coach</h3>
          <ul className="feedback-list feedback-list-tips">
            {conseils.map((conseil, index) => (
              <li key={`tip-${index}`}>{conseil}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
