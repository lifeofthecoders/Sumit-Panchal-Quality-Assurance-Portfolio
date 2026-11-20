import React from 'react';

/** Keeps a render-time React failure from leaving the browser on a blank page. */
export default class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('Portfolio failed to render:', error, info?.componentStack || '');
  }

  render() {
    if (this.state.error) {
      return (
        <main className="boot-error" role="alert">
          <p className="boot-error-kicker">PORTFOLIO STARTUP ERROR</p>
          <h1>The portfolio could not finish loading.</h1>
          <p>Refresh after checking the Vite terminal for the first error message.</p>
          <pre>{String(this.state.error?.message || this.state.error)}</pre>
        </main>
      );
    }
    return this.props.children;
  }
}
