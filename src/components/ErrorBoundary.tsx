import { Component, type ErrorInfo, type ReactNode } from "react";
import "./ErrorBoundary.css";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("Unhandled render error:", error, info.componentStack);
  }

  private handleReload = (): void => {
    window.location.reload();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <main className="error-boundary" role="alert">
          <h1>Une erreur est survenue</h1>
          <p>
            L&apos;application a rencontré un problème inattendu. Essayez de
            recharger la page.
          </p>
          <button
            type="button"
            className="error-boundary-reload"
            onClick={this.handleReload}
          >
            Recharger la page
          </button>
        </main>
      );
    }

    return this.props.children;
  }
}
