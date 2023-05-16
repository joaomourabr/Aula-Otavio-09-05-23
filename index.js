function inserirAluno() {
    var matricula = prompt('Digite a sua matrícula')
    var nome = prompt('Digite seu nome')
    var qt_faltas = parseInt(prompt('Digite a quantidade de faltas'))
    var nota_b1 = parseFloat(prompt('Digite sua nota do B1'))
    var nota_b2 = parseFloat(prompt('Digite sua nota do B2'))
    var media = (nota_b1 + nota_b2) / 2
    var nota_pr = parseFloat(prompt('Digite sua nota da Prova Final'))
    var media_final = (media + media_final)
    var pct_faltas = (qt_faltas / 80)

    if (pct_faltas > 0.25) {
        var situacao = 'Reprovado'
    }
    if (pct_faltas < 0.25) {
        var situacao = 'Aprovado'
    }





    var tabela = document.getElementById('tabela');

    var linha = tabela.insertRow(-1)

    linha.insertCell(0).innerText = matricula;
    linha.insertCell(1).innerText = nome;
    linha.insertCell(2).innerText = qt_faltas;
    linha.insertCell(3).innerText = nota_b1;
    linha.insertCell(4).innerText = nota_b2;
    linha.insertCell(5).innerText = media;
    linha.insertCell(6).innerText = nota_pr;
    linha.insertCell(7).innerText = media_final;
    linha.insertCell(8).innerText = situacao;








}