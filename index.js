document.getElementById('tipoReferencia').addEventListener('change', function() {
    var campos = document.querySelectorAll('.referencia-campos');
    campos.forEach(function(campo) {
      campo.style.display = 'none';
    });
    var tipoSelecionado = document.getElementById('tipoReferencia').value;
    document.getElementById(tipoSelecionado).style.display = 'block';
  });
  
  document.getElementById('gerar').addEventListener('click', function() {
    var tipoSelecionado = document.getElementById('tipoReferencia').value;
    var camposReferencia = document.querySelectorAll('#' + tipoSelecionado + ' input');
    var referenciaGerada = tipoSelecionado.charAt(0).toUpperCase() + tipoSelecionado.slice(1) + ': ';
    
    camposReferencia.forEach(function(campo) {
      referenciaGerada += campo.value + ', ';
    });
  
    referenciaGerada = referenciaGerada.slice(0, -2); // remover a última vírgula e espaço
  
    // exibir a referência gerada na div
    document.getElementById('referenciaGerada').innerText = referenciaGerada;
  });
  
  document.getElementById('copiar').addEventListener('click', function() {
    var tipoSelecionado = document.getElementById('tipoReferencia').value;
    var camposReferencia = document.querySelectorAll('#' + tipoSelecionado + ' input');
    var referenciaTexto = tipoSelecionado.charAt(0).toUpperCase() + tipoSelecionado.slice(1) + ': ';
  
    camposReferencia.forEach(function(campo) {
      referenciaTexto += campo.value + ', ';
    });
  
    referenciaTexto = referenciaTexto.slice(0, -2); // remover a última vírgula e espaço
    
    var textarea = document.createElement('textarea');
    textarea.value = referenciaTexto;
    
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  
    alert('Referência copiada para a área de transferência!');
  });
  
  document.getElementById('limpar').addEventListener('click', function() {
    var camposReferencia = document.querySelectorAll('#camposReferencia input');
    camposReferencia.forEach(function(campo) {
      campo.value = '';
    });
  
    // comando para limpar a referência gerada na div
    document.getElementById('referenciaGerada').innerText = '';
  
    alert('Campos limpos!');
  });
  