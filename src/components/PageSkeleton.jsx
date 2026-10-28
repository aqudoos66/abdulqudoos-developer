// src/components/PageSkeleton.jsx
export default function PageSkeleton() {
  return (
    <div className="page-skeleton container" aria-hidden="true">
      <div className="sk" style={{ height: 16, width: 140, marginBottom: 22 }} />
      <div className="sk" style={{ height: 52, width: '70%', marginBottom: 16 }} />
      <div className="sk" style={{ height: 20, width: '55%', marginBottom: 44 }} />
      <div className="sk-grid">
        {[0, 1, 2].map((i) => (
          <div key={i} className="sk" style={{ height: 190 }} />
        ))}
      </div>
    </div>
  );
}