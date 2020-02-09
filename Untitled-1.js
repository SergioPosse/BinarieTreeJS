

var arbol = new Array();
var dato = ['c','d','e','f','g','a','b']
var puntero = [1, 2, 3, 4, 5, 0, -1]
var hijoIzquierdo = [null, 4, null, 3, null, null, 0]
var hijoDerecho = [null, 0, null, null, null, 5, 1]

for(var i=0; i<7;i++){

    var obj = { //declare object named tree in spanish
        'dato': dato[i],  //data containing in node
        'puntero': puntero[i],   //pointer or index of the node
        'hijoDerecho': hijoIzquierdo[i],  //right son
        'hijoIzquierdo': hijoDerecho[i]  //left son
    };

    arbol.push(obj);
}

for(var i=0;i<arbol.length;i++){
    if(arbol[i].puntero==-1){
        a=arbol[i];
    }
}

var ordena = new Array();



function preorder(a){

        if (a.dato==null){
            return null;
        }
        else{
            ordena.push(a.puntero);
            var punt = a.puntero;

            for(var i=0;i<arbol.length;i++){
                if(arbol[i].puntero==punt){
                    a=arbol[i];
                }
            }

            hi=a.hijoIzquierdo;
            for(var i=0;i<arbol.length;i++){
                if(arbol[i].hijoIzquierdo==hi){
                    a=arbol[i];
                }
            }

            preorder(a);

            hd=a.hijoDerecho;
            for(var i=0;i<arbol.length;i++){
                if(arbol[i].hijoDerecho==hd){
                    a=arbol[i];
                }
            }
            preorder(a);
        }
 }

 preorder(a);

 console.log(ordena);
