// Crie um objeto Carro com os atributos marca, modelo e velocidade. Adicione um método
// acelerar() que aumente a velocidade em 10 e exiba a mensagem "Velocidade atual:
// [velocidade] km/h".

class Carro {
    constructor(marca, modelo, velocidade) {
      this.marca = marca;
      this.modelo = modelo;
      this.velocidade = velocidade;
    }
  
    acelerar() {
      this.velocidade += 10;
      console.log(`O carro ${this.marca} ${this.modelo} está a ${this.velocidade} km/h.`);
    }
  }
  
  const carro1 = new Carro("Volkswagen", "Gol", 30);
  
  carro1.acelerar();
  carro1.acelerar();
  carro1.acelerar();
  