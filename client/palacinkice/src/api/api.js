const BASE_URL="https://localhost:7074/api/Palacinkice";
export async function getAll(){
    const odgovor=await fetch(BASE_URL);
    if(!odgovor.ok) throw new Error('Greska');
    return odgovor.json();
}
export async function getOne(id) {
    const odgovor=await fetch(`${BASE_URL}/${id}`);
    if(!odgovor.ok) throw new Error('Greska');
    return odgovor.json();
}
export async function createPancake(p){
    const odgovor= await fetch(BASE_URL, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(p)
    });
    if(!odgovor.ok) throw new Error('Greska');
    await odgovor.json();
}
export async function deletePancake(id){
    const odgovor=await fetch(`${BASE_URL}/${id}`,{
        method:'DELETE'
    });
    if(!odgovor.ok) throw new Error('Greska');
    await odgovor.json(); 
}
export async function updatePancake(id,p) {
    const odgovor = await fetch(`${BASE_URL}/${id}`, {
        method:'PUT',
        headers:{'Content-Type':'application.json'},
        body:JSON.stringify(id,p)
    });
    if(!odgovor.ok) throw new Error('Greskaa');
    await odgovor.json();
}