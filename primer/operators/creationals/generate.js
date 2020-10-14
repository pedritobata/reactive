
// primer parametro: initialState
// segundo parametro: condition
// tercer parametro: iterate (aqui es el cuerpo del loop y AUMENTAR EL INDICE para evitar el loop infinito!!)
// cuarto parametro opcional: resultSelector
// generate() es practicamente un for loop

const generate$ = rxjs.generate(1, x => x <= 10, x => x + 1);
generate$.subscribe(x => console.log(x));

//pasando argumentos como un objeto
const generate2$ = rxjs.generate({
    initialState: 'hola',
    condition: text => text.length < 50,
    iterate: text => text.concat('perico')
});

generate2$.subscribe(x => console.log(x));