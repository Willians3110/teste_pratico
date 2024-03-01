$(document).ready(function() {
  // Quando o botão de busca é clicado
  $('#buscarCEP').click(function() {
    // Obtém o valor inserido pelo usuário no campo de entrada de texto
    var cep = $('#cepInput').val();
    // Faz uma requisição GET à API Viacep utilizando o CEP inserido pelo usuário
    $.getJSON('https://viacep.com.br/ws/' + cep + '/json/', function(data) {
      // Verifica se o CEP foi encontrado (se não há erro no retorno)
      if (!("erro" in data)) {
        // Constrói a string com o endereço encontrado
        var endereco = 'Endereço: ' + data.logradouro + ', ' + data.bairro + ', ' + data.localidade + ' - ' + data.uf;
        // Exibe o endereço na div de resultado
        $('#resultadoCEP').html(endereco);
      } else {
        // Se o CEP não foi encontrado, exibe uma mensagem de erro na div de resultado
        $('#resultadoCEP').html('CEP não encontrado.');
      }
    });
  });
});
