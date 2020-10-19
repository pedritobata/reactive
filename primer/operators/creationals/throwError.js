
const error$ = rxjs.interval(1000).pipe(
    rxjs.operators.mergeMap(x => x === 2 ? rxjs.throwError("twos are Bad!!") :
    rxjs.of('y','e','a','h'))
).subscribe(x => console.log(x), error => console.log(error));