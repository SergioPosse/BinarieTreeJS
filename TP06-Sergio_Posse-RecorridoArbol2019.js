<html>
    <head>

    </head>
    <body>
        <script>
        class Nodo{ //TOME UN EJEMPLO EN ECMASCRIPT5 Y LO PASE A CLASES QUE USA ECMASCRIPT6
    constructor(dato,izquierdo,derecho){
            this.dato=dato;
            this.izquierdo=izquierdo;
            this.derecho=derecho;
    }
}

//OJO CON EL ORDEN EN QUE SE HACE ESTO.. DESORDENADO ME DABA ERROR 
//YA QUE EN ESTE PRACTICO ESTOY CARGANDO TODO A MANO EL ARBOL CON LOS DATOS DEL EJERCICIO
//PRIMERO VAN LOS NODOS QUE NO TIENE HIJOS Y SE TERMINA CON LA RAIZ
//ESTO NO ESTABA ACLARADO EN EL EJEMPLO ASI QUE ES LO QUE MAS ME COSTO DESCUBRIR
var nodoC = new Nodo("c");
var nodoE = new Nodo("e");
var nodoG = new Nodo("g");
var nodoF = new Nodo("f", nodoE);
var nodoA = new Nodo("a", null, nodoG);
var nodoD = new Nodo("d", nodoF, nodoA);
var nodoB = new Nodo("b", nodoC, nodoD);

//SABEMOS que el nodo raiz es nodoB segun el ejercicio propuesto por el profesor
//entonces empezamos la recursividd de la funcion desde la raiz en el caso de preorden

var preordenado = new Array(); //un array que contendra los datos de los nodos ordenados en preorden
var inordenado = new Array();
var postordenado = new Array();

preorden(nodoB);
inorden(nodoB);
postorden(nodoB);


function preorden(nodo){           //en vez de hacer un if nodo==null hice el condicional en el izquierdo y derecho directo
    //porque ya se que la raiz, que es con la cual empieza la funciona, la pongo yo manualmente.

    preordenado.push(nodo.dato);
    
    if(nodo.izquierdo){
        preorden(nodo.izquierdo);
    };
    if(nodo.derecho){
        preorden(nodo.derecho);
    };
 }

 function inorden(nodo){
    if(nodo.izquierdo){
        inorden(nodo.izquierdo);
    };

    inordenado.push(nodo.dato);

    if(nodo.derecho){
        inorden(nodo.derecho);
    };
 }

 function postorden(nodo){
    if(nodo.izquierdo){
        postorden(nodo.izquierdo);
    };

    postordenado.push(nodo.dato);

    if(nodo.derecho){
        postorden(nodo.derecho);
    };
 }

 console.log(preordenado);
 console.log(inordenado);
 console.log(postordenado);
        </script>
    </body>
</html>
