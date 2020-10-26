// concat acepta como parametros varios observables (varargs) o un array the observables
// concat se subscribe uno por uno y en orden .  pero no pasa al siguiente hast que
//no haya terminado con el anterior. Así , si uno manca los demas ya no se ejecutan

const concat1$ = rxjs.concat(
    rxjs.interval(1000).pipe(rxjs.operators.take(4)), 
    rxjs.range(1, 10)
).subscribe(x => console.log(x));

// probemos con 3 observables
const concat2$ = rxjs.concat(
    rxjs.interval(1000).pipe(rxjs.operators.take(3)),
    rxjs.interval(2000).pipe(rxjs.operators.take(4)),
    rxjs.interval(1000).pipe(rxjs.operators.take(5)),
).subscribe(x => console.log(x));