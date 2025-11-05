// Carrito de compras

function Carrito() {
  this.productos = []; 
  this.total = 0;      
}


Carrito.prototype.agregarProducto = function(nombre, precio) {
  this.productos.push({ nombre, precio });
  this.total += precio;
  console.log(`- Producto agregado: ${nombre} -${precio}-`);
};


Carrito.prototype.calcularDescuento = function() {
  console.log("\n Productos en el carrito:");
  for (let i = 0; i < this.productos.length; i++) {
    console.log(`- ${this.productos[i].nombre}: ${this.productos[i].precio}`);
  }

  console.log(`\n💰 Total antes del descuento: ${this.total}`);

  if (this.total > 100) {
        let descuento = this.total * 0.10;
        let totalConDescuento = this.total - descuento;
        console.log(`--- Descuento aplicado: 10% (-${descuento.toFixed(2)})`);
        console.log(`-- Total final: ${totalConDescuento.toFixed(2)}`);
  } else if (this.total > 50 && this.total <= 100) {
            let descuento = this.total * 0.05;
            let totalConDescuento = this.total - descuento;
            console.log(`--- Descuento aplicado: 5% (-${descuento.toFixed(2)})`);
            console.log(`------Total final: ${totalConDescuento.toFixed(2)}`);
         } else {
                console.log("--- No aplica descuento.");
                console.log(`----Total final: ${this.total.toFixed(2)}`);
  }
};

const miCarrito = new Carrito();

miCarrito.agregarProducto("Camiseta", 30);
miCarrito.agregarProducto("Pantalón", 40);
miCarrito.agregarProducto("Zapatos", 50);

miCarrito.calcularDescuento();
