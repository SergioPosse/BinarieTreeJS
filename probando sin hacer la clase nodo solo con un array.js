

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

console.log(arbol[0].puntero);

for(var i=0;i<7;i++){
    if(arbol[i].puntero==-1){
        a=arbol[i];
        console.log(a.dato);
    }
}


var ordena = new Array();

preorder(a);

function preorder(a){

        if (a.puntero==undefined | a.puntero==null){
            return;
        }
        else{
            ordena.push(a.puntero);
            punt = a.puntero;

            for(var n=0;n<7;n++){
                if(arbol[n].puntero==punt){
                    a=arbol[n];
                }
            }

            hi=a.hijoIzquierdo;

            if(hi==undefined){
                return
            }
            else{
                for(var i=0;i<7;i++){
                    if(arbol[i].hijoIzquierdo==hi){
                        a=arbol[i];
                    }
                }
                preorder(a)
            }
            
            hd=a.hijoDerecho;
            if(hd==undefined){
                return
            }
            else{
                for(var k=0;k<7;k++){
                    if(arbol[k].hijoDerecho==hd){
                        a=arbol[k];
                    }
                }
                preorder(a);
            }
           
        }
 }

