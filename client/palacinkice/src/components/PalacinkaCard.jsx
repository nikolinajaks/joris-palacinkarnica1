import './PalacinkaCard.css';

export default function PalacinkaCard({ palacinka, onEdit, onDelete }) {
  return (
    <div className="palacinka-card">
      <div className={`tip-badge ${palacinka.tip === 'Slatka' ? 'tip-slatka' : 'tip-slana'}`}>
        {palacinka.tip === 'Slatka' ? '🍫 Slatka' : '🧀 Slana'}
      </div>

      <h3 className="card-naziv">{palacinka.naziv}</h3>

      <p className="card-sastojci">
        <span className="card-label">Sastojci:</span> {palacinka.sastojci}
      </p>

      <div className="card-footer">
        <span className="card-cena">{palacinka.cena.toFixed(2)} RSD</span>
        <div className="card-actions">
          <button className="card-btn btn-edit" onClick={() => onEdit(palacinka)}>
            ✏️ Izmeni
          </button>
          <button className="card-btn btn-delete" onClick={() => onDelete(palacinka.id)}>
            🗑️ Obriši
          </button>
        </div>
      </div>
    </div>
  );
}
