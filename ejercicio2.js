//lista de compras

function ListaCompras() {
  this.productos = []; 
}


ListaCompras.prototype.agregar = function(producto) {
  this.productos.push(producto);
};


ListaCompras.prototype.mostrar = function() {
  console.log("------- Lista de Compras------------");
  for (let i = 0; i < this.productos.length; i++) {
    console.log(`${i + 1}. ${this.productos[i]}`);
  }
};

const lista = new ListaCompras();

lista.agregar("Manzanas");
lista.agregar("Durazno");
lista.agregar("Leche");

lista.mostrar();
