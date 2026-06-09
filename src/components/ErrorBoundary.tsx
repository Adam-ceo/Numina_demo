import React, { ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('Error caught by boundary:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-numina-cream">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-numina-dark mb-2">Valami nem működik jól</h1>
            <p className="text-numina-dark/70 mb-6">Kérjük, frissítse az oldalt.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Oldal frissítése
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
