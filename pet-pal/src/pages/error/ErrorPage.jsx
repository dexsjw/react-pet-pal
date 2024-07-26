const ErrorPage = ({ error, resetErrorBoundary }) => {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>
        {error && error.message ? error.message : "An error occurred"}
      </pre>
      <button onClick={() => resetErrorBoundary()}>Retry Render</button>
    </div>
  );
};

export default ErrorPage;
