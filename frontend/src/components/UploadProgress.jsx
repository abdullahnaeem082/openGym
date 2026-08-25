export default function UploadProgress({
  progress = 0,
  fileName = 'Image',
  status = 'uploading'
}) {
  const percentage = Math.min(100, Math.max(0, Math.round(progress)))

  const statusText =
    status === 'complete'
      ? 'Upload complete'
      : status === 'error'
        ? 'Upload failed'
        : `Uploading ${percentage}%`

  return (
    <div
      className={`upload-progress upload-progress-${status}`}
      role="status"
      aria-live="polite"
    >
      <div className="upload-progress-header">
        <span className="upload-file-name">{fileName}</span>
        <span className="upload-status">{statusText}</span>
      </div>

      <div
        className="upload-progress-track"
        role="progressbar"
        aria-label={`Uploading ${fileName}`}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={percentage}
      >
        <div
          className="upload-progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
