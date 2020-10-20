// primer parametro: delay antes de empezar a emitir los numeros
// segundo parametro: intervalo de tiempo entre cada emision
const timer$ = rxjs.timer(3000,1000);
const subscription = timer$.subscribe(x => console.log(x));
subscription.unsubscribe();

// si no se especifica el intervalo de emision, solo se emitirá el primer numero y muere
const timer2$ = rxjs.timer(3000);
const subscription2 = timer2$.subscribe(x => console.log(x));