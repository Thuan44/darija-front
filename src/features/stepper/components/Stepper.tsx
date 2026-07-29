import { JOURNEY_STEPS, type JourneyStep } from "../constants";
import "./Stepper.css";

type StepperProps = {
  currentStep: number;
  steps?: JourneyStep[];
  onStepClick?: (stepId: number) => void;
};

export function Stepper({
  currentStep,
  steps = JOURNEY_STEPS,
  onStepClick,
}: StepperProps) {
  return (
    <nav className="stepper" aria-label="Progression du parcours">
      <ol className="stepper-list">
        {steps.map((step, index) => {
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;
          const isClickable = Boolean(onStepClick) && isCompleted;
          const statusLabel = isCurrent
            ? " (en cours)"
            : isCompleted
              ? " (terminée)"
              : "";
          const ariaLabel = `Étape ${step.id} : ${step.label}${statusLabel}`;
          const className = [
            "stepper-button",
            isCurrent ? "is-current" : "",
            isCompleted ? "is-completed" : "",
            isClickable ? "is-clickable" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <li key={step.id} className="stepper-item">
              {isClickable ? (
                <button
                  type="button"
                  className={className}
                  aria-label={ariaLabel}
                  onClick={() => onStepClick?.(step.id)}
                >
                  <span className="stepper-marker" aria-hidden="true">
                    ✓
                  </span>
                  <span className="stepper-label">{step.label}</span>
                </button>
              ) : (
                <div
                  className={className}
                  aria-current={isCurrent ? "step" : undefined}
                  aria-label={ariaLabel}
                >
                  <span className="stepper-marker" aria-hidden="true">
                    {step.id}
                  </span>
                  <span className="stepper-label">{step.label}</span>
                </div>
              )}
              {index < steps.length - 1 && (
                <span
                  className={`stepper-connector${
                    isCompleted ? " is-completed" : ""
                  }`}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
