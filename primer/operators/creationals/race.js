
//race puede recibir n observables como varargs o como array
// se subsecribe al primero que empieze a emitir elementos y se queda con ese hasta el final

const competitor1$ = rxjs.interval(1000).pipe(rxjs.operators.mapTo("fast one"));
const competitor2$ = rxjs.interval(3000).pipe(rxjs.operators.mapTo("medium one"));
const competitor3$ = rxjs.interval(5000).pipe(rxjs.operators.mapTo("slow one"));

const race$ = rxjs.race(competitor1$, competitor2$, competitor3$).subscribe(x => console.log(x));