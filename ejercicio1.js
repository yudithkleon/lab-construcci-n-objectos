
function Libro(titulo, autor){
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;
}
    Libro.prototype.prestar = function(){
        if(!this.prestado){
            this.prestado = true;
            console.log(`El libro "${this.titulo}" ha sido prestado.`);
        } else {
            console.log(`El libro "${this.titulo}" ya está prestado, No disponible.`);
        }
    }


const libro1 = new Libro("El poder del Ahora", "Eckhart Tolle");
libro1.prestar();
libro1.prestar(); 
