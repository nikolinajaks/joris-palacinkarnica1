import { useState, useEffect} from 'react'
import PalacinkaList from './components/PalacinkaList'
import PalacinkaForm from './components/PalacinkaForm'
import * as api from './api/api'
import './App.css'

export function App() {
  const [selectedPalacinka, setSelectedPalacinka] = useState(null);
  const [palacinke, setPalacinke] = useState([]);
  const [filter, setFilter] = useState('Sve');
  
  let filteredPalacinke;

  if(filter==='Sve'){
    filteredPalacinke=palacinke;
  }else{
    filteredPalacinke=palacinke.filter(p=>p.tip===filter);
  }

  useEffect(()=>{
    loadPancakes();
  }, []);

  async function loadPancakes() {
    const data=await api.getAll();
    setPalacinke(data);
  }
  async function handleAdd(p) {
    await api.createPancake(p);
    await loadPancakes();
  }
  async function handleDelete(id){
    await api.deletePancake(id);
    setPalacinke(p=>p.filter(p=>p.id!==id));
  }
  async function handleUpdate(p) {
    await api.updatePancake(selectedPalacinka.id, p);
    await loadPancakes();
    setSelectedPalacinka(null);
  }
  function handleEdit(palacinka){
    setSelectedPalacinka(palacinka);
  }
  function handleCancelEdit(){
    setSelectedPalacinka(null);
  }

  return ( 
    <div className="app">
      <header className="navbar">
        <div className="navbar-inner">
          <span className="navbar-logo">🥞</span>
          <span className="navbar-brand">Palačinkarnica</span>
          <span className="navbar-tagline">Domaće palačinke od ljubavi</span>
        </div>
      </header>

      <main className="main-content">
        <PalacinkaForm
          onSubmit={selectedPalacinka ? handleUpdate : handleAdd}
          editData={selectedPalacinka}
          onCancel={handleCancelEdit}
        />

        <section className="section-list">
          <div className="section-header">
            <h2 className="section-title">
              Naša ponuda
              <span className="badge">{filteredPalacinke.length}</span>
            </h2>
            <div className="filter-group">
              {['Sve', 'Slatka', 'Slana'].map(tip => (
                <button
                  key={tip}
                  className={`filter-btn${filter === tip ? ' filter-btn--active' : ''}`}
                  onClick={() => setFilter(tip)}
                >
                  {tip === 'Sve' ? '🥞 Sve' : tip === 'Slatka' ? '🍫 Slatke' : '🧀 Slane'}
                </button>
              ))}
            </div>
          </div>
          <PalacinkaList
            palacinke={filteredPalacinke}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Palačinkarnica — Sve palačinke su prave i sveže 🥞</p>
      </footer>
    </div>
  );
}

export default App
