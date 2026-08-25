export default function SkeletonLoader({
  rows = 3,
  showImage = true,
  className = ''
}) {
  return (
    <div
      className={`skeleton-card ${className}`}
      role="status"
      aria-label="Loading content"
      aria-live="polite"
    >
      {showImage && <div className="skeleton skeleton-image" />}

      <div className="skeleton-content">
        {Array.from({ length: rows }).map((_, index) => (
          <div
            key={index}
            className={`skeleton skeleton-line ${
              index === rows - 1 ? 'skeleton-line-short' : ''
            }`}
          />
        ))}
      </div>

      <span className="sr-only">Loading, please wait.</span>
    </div>
  )
}
