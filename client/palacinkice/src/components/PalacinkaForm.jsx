import { useState, useEffect } from 'react';
import './PalacinkaForm.css';

const EMPTY_FORM = { naziv: '', tip: 'Slatka', sastojci: '', cena: '' };

export default function PalacinkaForm({ onSubmit, editData, onCancel }) {
  const [form, setForm] = useState(EMPTY_FORM);

  useEffect(() => {
    if (editData) {
      setForm({
        naziv: editData.naziv,
        tip: editData.tip,
        sastojci: editData.sastojci,
        cena: editData.cena,
      });
    } else {
      setForm(EMPTY_FORM);
    }
  }, [editData]);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ ...form, cena: parseFloat(form.cena) });
    if (!editData) setForm(EMPTY_FORM);
  }

  return (
    <form className="palacinka-form" onSubmit={handleSubmit}>
      <h2 className="form-title">
        {editData ? '✏️ Izmeni palačinku' : '🥞 Dodaj novu palačinku'}
      </h2>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="naziv">Naziv</label>
          <input
            id="naziv"
            name="naziv"
            type="text"
            placeholder="npr. Nutela & banana"
            value={form.naziv}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tip">Tip</label>
          <select id="tip" name="tip" value={form.tip} onChange={handleChange} required>
            <option value="Slatka">Slatka</option>
            <option value="Slana">Slana</option>
          </select>
        </div>

        <div className="form-group full-width">
          <label htmlFor="sastojci">Sastojci</label>
          <textarea
            id="sastojci"
            name="sastojci"
            rows={3}
            placeholder="npr. brašno, jaje, mleko, nutela, banana..."
            value={form.sastojci}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cena">Cena (RSD)</label>
          <input
            id="cena"
            name="cena"
            type="number"
            min="0"
            step="0.01"
            placeholder="npr. 350"
            value={form.cena}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {editData ? 'Sačuvaj izmene' : 'Dodaj palačinku'}
        </button>
        {editData && (
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Otkaži
          </button>
        )}
      </div>
    </form>
  );
}
