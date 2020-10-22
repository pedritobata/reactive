
// combineLates emite arreglos que tienen SIEMPRE la misma longitud, la cual es
//igual a la cantidad de observables que se pasen como argumento
//Osea que esto es "todo o nada". se combina siempre el ultimo elemento emitido por
//cada obervable y se ordenan en el array en el mismo orden que los observables fueron pasados
// si algun observable nunca emitió un valor, el resultado final tampoco emitirá ningun valor
// si algun observable tira error en algun momento, el resultado tambien tirará error en ese momento
// y manca

const timer1$ =rxjs.timer(0,1000);
const timer2$ =rxjs.timer(500,1000);
const latest$ = rxjs.combineLatest(timer1$,timer2$);
const latestSubscription = latest$.subscribe(x => console.log(x));
latestSubscription.unsubscribe();


const latest2Arguments = [1,2,3].map(n => {
    return rxjs.of(n).pipe(
        rxjs.operators.delay(n * 1000),
        rxjs.operators.startWith(0)
    );
})

const latest2$ = rxjs.combineLatest(latest2Arguments);
const latestSubscription2 = latest2$.subscribe(x => console.log(x));

const weight = [74, 75, 87, 95];
const height = [1.75];
const indiceMasaCorporal$ = rxjs.combineLatest(rxjs.from(weight), rxjs.from(height))
.pipe(rxjs.operators.map(
    ([w,h]) => (w / Math.pow(h,2))
)).subscribe(x => console.log("Tu indice de masa corporal:", x));


