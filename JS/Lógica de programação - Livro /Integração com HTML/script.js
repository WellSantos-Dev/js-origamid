// IMPORTANTE: Não usar innerHTML pois, essa propriedade mostra o conteúdo da tag e dá uma ajuda a algum hacker executar comandos XSS


function mostrarOla() {
    let texto = document.getElementById("nome").value;
    alert(`Olá, ${texto}`);
}