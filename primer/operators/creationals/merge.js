
//merge se subscribe a los observables y los flattea y emite los elementos conforme
//lo van emitiendo los observables
const btnMerge = document.getElementById("btnMerge");
const btn$ = rxjs.fromEvent(btnMerge, "click");
const interval$ = rxjs.interval(1000).pipe(rxjs.operators.take(10));

//const merge$ = rxjs.merge(btn$, interval$).subscribe(x => console.log(x));


//se puede agregar un ultimo parametro entero que dice cuantos observables
//se van a ejecutar a la vez en lugar de todos. cuando van completando su emision los
//observables, rxjs coge el siguiente en la lista pero siempre maximo emite el numero de
//observables que le haya especificado a la vez.
const timer1$ = rxjs.interval(1000).pipe(rxjs.operators.take(4));
const timer2$ = rxjs.interval(1000).pipe(rxjs.operators.take(6));
const timer3$ = rxjs.interval(1000).pipe(rxjs.operators.take(3));
const concurrently = 2;
const merge2$ = rxjs.merge(timer1$, timer2$, timer3$, concurrently).subscribe(x => console.log(x));

