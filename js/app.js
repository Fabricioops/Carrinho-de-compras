let totalGeral = 0;

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value; 
    
    //calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');

    //adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`;

    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total'); 
    campoTotal.textContent = R$ ${totalGeral}``;
}

function limpar() {
    // Limpar a lista de produtos
    let limparCampo = document.getElementById('lista-produtos');
    limparCampo.innerHTML = `<section class="carrinho_produtos_produto">
        <span class="texto-azul">${""}</span>${""} <span class="texto-azul">${""}</span>
    </section>`;

    // Limpar o total
    let limparTotal = document.getElementById('valor-total');
    limparTotal.innerHTML = `<p class="carrinho__total">
        ${""} <span class="texto-azul" id="valor-total">${""}</span>
    </p>`;

    // Limpar o campo de quantidade
    let limparQuantidade = document.getElementById('quantidade');
    limparQuantidade.value = ""; // Aqui o campo de quantidade é limpo 
}