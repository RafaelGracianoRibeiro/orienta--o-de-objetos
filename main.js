function Veiculo(preco, marca, ano){
    this.preco = preco;
    this.marca = marca;
    this.ano = ano;
}

function Carro(preco, marca, ano, portas){
    Veiculo.call(this,preco,marca,ano);
    this.portas = portas;
}

function Moto(preco,marca,ano,cilindradas){
    Veiculo.call(this,preco,marca,ano)
    this.cilindradas = cilindradas
}

const carro1 = new Carro(70.000,"Fiat",2019,4)
const moto = new Moto(20.000,"Honda",2020,"300")
const carro2 = new Carro(35.000,"Toyota",2016,4)

console.log(carro1);
console.log(moto)