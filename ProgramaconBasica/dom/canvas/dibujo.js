// alert("ESTOY FUNCIONANDO");

// obetener el canvas por medio del ID: dibujito
var d = document.getElementById("dibujito");
// hacer que el lienzo sea 2D
var lienzo = d.getContext("2d");


x1_ = 10;
y1_ = 0;

x2_ = 10;
y2_ = 10;

i = 1;
n = 10;


// ejemplo de dibujar linea con whiles
while (i < 30) {
    dibujarLinea("black", 0, y1_, x2_, 300);
    dibujarLinea("red", 300, x2_, y1_, 0);

    dibujarLinea("blue", 0, 0, y1_, 300);




    console.log("liena" + i);
    y1_ += 10;
    x2_ += 10;
    i += 1;
}



// dibujarLinea("black", 0, 0, 300, 0);
// dibujarLinea("black", 300, 0, 300, 300);
// dibujarLinea("black", 300, 0, 300, 300);

// for (i = 0; i < 300; i++) {
//     dibujarLinea("black", 0, y1_, x2_, 300);
//     console.log("liena" + i);
//     y1_ += 10;
//     x2_ += 10;
//     i += 1;
// }




function dibujarLinea(color, x1, y1, x2, y2) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x1, y1);
    lienzo.lineTo(x2, y2);
    lienzo.stroke();
    lienzo.closePath();
}



// arrancar un camino