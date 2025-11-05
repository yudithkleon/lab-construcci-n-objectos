//Reproductor de música buena buenisima

function Reproductor() {
  this.estado = "detenido"; 
}

Reproductor.prototype.play = function() {
  if (this.estado !== "reproduciendo") {
    this.estado = "reproduciendo";
    console.log("----------Reproduciendo música--------------");
  } else {
    console.log("----------- El reproductor ya está reproduciendo-----------");
  }
};

Reproductor.prototype.pause = function() {
  if (this.estado === "reproduciendo") {
    this.estado = "pausado";
    console.log("---------- Música pausada---------");
  } else {
    console.log("----------- No se puede pausar, no está reproduciendo.");
  }
};

Reproductor.prototype.stop = function() {
  if (this.estado !== "detenido") {
    this.estado = "detenido";
    console.log("----------- Reproductor detenido.");
  } else {
    console.log("------------- El reproductor ya está detenido.");
  }
};


const miReproductor = new Reproductor();

miReproductor.play();  
miReproductor.pause(); 
miReproductor.stop();  
