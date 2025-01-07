// Crie um objeto Produto com os atributos nome, preco e estoque. Adicione um método
// verificarEstoque() que exiba "Ainda restam [estoque] unidades de [nome]"

class Produto {
    constructor(nome, preco, estoque) {
      this.nome = nome;
      this.preco = preco;
      this.estoque = estoque;
    }
  
    verificarEstoque() {
      console.log(`Ainda restam ${this.estoque} unidades do celular ${this.nome} (Preço: R$ ${this.preco}).`);
    }
  }
  
  const produto1 = new Produto("Samsung A30", 1500, 25);
  
  produto1.verificarEstoque();
  
  