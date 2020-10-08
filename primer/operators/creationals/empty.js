// empty() Solo envia una notificacion de complete y listo

const empty$ = rxjs.empty().pipe(
    rxjs.operators.startWith(7)
)

const empty$2 = rxjs.empty();

console.log("**********empty**********")
empty$.subscribe(x => console.log(x));
empty$2.subscribe(x => console.log(x));//este no devuelve nada

const empty$3 = rxjs.interval(1000).pipe(
    rxjs.operators.mergeMap(x => x % 2 !== 0 ? rxjs.of('a','b','c') : rxjs.empty())
);

//empty$3.subscribe(x => console.log(x));
