
//partition parte un observable en dos devolviendolos en un array 
// primer parametro es el observable
// el segundo parametro es una funcion que evalua una condicion, recibe los mismos argumentos que map()
// el primer elemento del array devuelto es el observable que contiene los elementos que cumplieron la condicion
// el segundo elemento del array devuelto contiene el observable que contienen los que no cumplieron

const source$ = rxjs.of(1,2,3,4,5,6);
const [half1$, half2$] = rxjs.partition(source$, (element,index) => element % 2 == 1);
half1$.subscribe(x => console.log(x));
half2$.subscribe(x => console.log(x));