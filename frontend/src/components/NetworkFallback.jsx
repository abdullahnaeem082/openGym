export default function NetworkFallback({
  title = 'Unable to load content',
  message = 'Check your internet connection and try again.',
  onRetry
}) {
  return (
    <div className="network-fallback" role="alert">
      <div className="network-fallback-icon" aria-hidden="true">
        !
      </div>

      <h3 className="network-fallback-title">{title}</h3>
      <p className="network-fallback-message">{message}</p>

      {onRetry && (
        <button
          type="button"
          className="network-retry-button"
          onClick={onRetry}
        >
          Try again
        </button>
      )}
    </div>
  )
}
