// Crie um objeto Cachorro com os atributos nome e raca. Adicione um método latir() que
// exiba a mensagem "O cachorro [nome] está latindo!".

class Cachorro {
    constructor(nome, raca) {
      this.nome = nome;
      this.raca = raca;
    }
  
    latir() {
      console.log(`O cachorro ${this.nome}, da raça ${this.raca}, está latindo!`);
    }
  }
  
  const cachorro1 = new Cachorro("Tor", "Picchi");
  
  cachorro1.latir();
  
  