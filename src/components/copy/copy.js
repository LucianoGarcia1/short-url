export default function copy(){
    const a = document.getElementById("shortLy");
    
    navigator.clipboard.writeText(a.innerText);
    alert(`Link copiado com sucesso ${a.innerText}`);
}