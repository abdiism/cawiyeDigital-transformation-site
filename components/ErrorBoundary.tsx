import React, { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * ErrorBoundary
 * 
 * A class component that catches JavaScript errors anywhere in their child component tree,
 * logs those errors, and displays a fallback UI instead of the component tree that crashed.
 * 
 * Usage:
 * <ErrorBoundary>
 *   <MyComponent />
 * </ErrorBoundary>
 */
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    const { hasError } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      if (fallback) {
        return fallback;
      }

      return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center bg-gray-50 rounded-3xl m-4 border border-gray-100">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 text-brand-red">
            <AlertTriangle size={32} />
          </div>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
            Something went wrong
          </h2>
          <p className="text-gray-500 mb-8 max-w-md">
            We encountered an unexpected error while loading this section. Our team has been notified.
          </p>
          <button 
            onClick={this.handleReload}
            className="flex items-center gap-2 px-6 py-3 bg-brand-black text-white rounded-full hover:bg-gray-800 transition-all font-medium"
          >
            <RefreshCw size={18} />
            Reload Page
          </button>
        </div>
      );
    }

    return children;
  }
}