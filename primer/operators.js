// un vistazo a map. Rara forma de pipear los operators con los observables
rxjs.operators.map(x => x * x)(rxjs.of(1,2,3)).subscribe(value => console.log(`value: ${value}`));

// lo mismo para un vistazo a first
rxjs.operators.first()(rxjs.of(3,4,5)).subscribe(value => console.log(`first: ${value}`));

//Creation operators
//example: interval
const interval = rxjs.interval(1000)
.subscribe((value) => console.log("tick:",value));
interval.unsubscribe(() => console.log("chau interval"));

//Higher order observable example
const exhaustObservable = rxjs.interval(1000).pipe(
    rxjs.operators.map(tick => rxjs.interval(1000)),
    rxjs.operators.exhaust()
).subscribe(tick => console.log(tick));
exhaustObservable.unsubscribe();

const mergeObservable = rxjs.interval(1000)
.pipe(
    rxjs.operators.map(x=> rxjs.interval(1000)),
    rxjs.operators.mergeAll()
).subscribe(tick => console.log(tick));
mergeObservable.unsubscribe();
