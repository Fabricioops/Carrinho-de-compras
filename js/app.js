let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = '';


function adicionar() {
    // Recuperar valores - nome do produto, quantidade e valor
    let Produto = document.getElementById('produto').value;
    let nomeProduto = Produto.split('-')[0];
    let valorUnitario = Produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    console.log(nomeProduto);
    console.log(valorUnitario);
    console.log(quantidade);

    // Calcular o preço, o subtotal
    let preco = quantidade * valorUnitario;
    console.log(preco);

    // Adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho_produtos_produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;

    // Atualizar o total da compra
    totalGeral = totalGeral + preco;

    let totalizando = document.getElementById('valor-total');
    totalizando.innerHTML = `<p class="carrinho__total">
        Total: <span class="texto-azul" id="valor-total">R$${totalGeral}</span>
    </p>`;
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