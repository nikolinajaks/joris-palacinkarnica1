import PalacinkaCard from './PalacinkaCard';
import './PalacinkaList.css';

export default function PalacinkaList({palacinke, onEdit, onDelete}){
if(palacinke.length===0){
     return(
      <div className="empty-state">
        <span className="empty-icon">🥞</span>
        <p>Nema palacinki u ponudi</p>
      </div>
     );
}
return (
    <div className="palacinka-grid">{
    palacinke.map(p=>(
        <PalacinkaCard key={p.id} palacinka={p} onEdit={onEdit} onDelete={onDelete}/>
    ))}
    </div>
);
}