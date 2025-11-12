// Máscara para CPF, telefone e CEP com vanilla JS
document.addEventListener('DOMContentLoaded', function(){
    const cpf = document.getElementById('cpf');
    const telefone = document.getElementById('telefone');
    const cep = document.getElementById('cep');

    if (cpf) {
      cpf.addEventListener('input', function(e){
          let value = cpf.value.replace(/\D/g, '');
          if(value.length > 3) value = value.replace(/^(\d{3})(\d)/, '$1.$2');
          if(value.length > 7) value = value.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
          if(value.length > 11) value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
          cpf.value = value.slice(0,14);
      });
    }

    if (telefone) {
      telefone.addEventListener('input', function(e){
          let value = telefone.value.replace(/\D/g, '');
          value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
          if(value.length > 10) value = value.replace(/(\d{5})(\d{4})$/, '$1-$2');
          else if(value.length > 9) value = value.replace(/(\d{4})(\d{4})$/, '$1-$2');
          telefone.value = value.slice(0,15);
      });
    }

    if (cep) {
      cep.addEventListener('input', function(e){
          let value = cep.value.replace(/\D/g, '');
          if(value.length > 5) value = value.replace(/^(\d{5})(\d)/, '$1-$2');
          cep.value = value.slice(0,9);
      });
    }
});