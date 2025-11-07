
const masks = {
  cpf(v){return v.replace(/\D/g,'').slice(0,11).replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2')},
  phone(v){return v.replace(/\D/g,'').slice(0,11).replace(/(\d{2})(\d)/,'($1) $2').replace(/(\d{5})(\d{4})/,'$1-$2')},
  cep(v){return v.replace(/\D/g,'').slice(0,8).replace(/(\d{5})(\d{1,3})/,'$1-$2')}
};
function applyMasks(){
  const map = {cpf:'cpf', telefone:'phone', cep:'cep'};
  for (const [name,fn] of Object.entries(map)){
    const el = document.querySelector(`input[name="${name}"]`);
    if(el) el.addEventListener('input', e => e.target.value = masks[fn](e.target.value));
  }
}
document.addEventListener('DOMContentLoaded', applyMasks);
