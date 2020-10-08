// crea observables casi de cualquier objeto
// a partir de Arrays, array like, iterable, generators, observable like, Promise

console.log("**********from**********")
const array$ = rxjs.from([1,2,3,4]).subscribe(x => console.log(x));

function* generateDoubles(seed){
    let i = seed;
    while(true){
        yield i;
        i *= 2;
    }
}

const generator = generateDoubles(2);

const generate$ = rxjs.from(generator).pipe(rxjs.operators.take(10));
generate$.subscribe(x => console.log(x));

// spoileando a un scheduler

console.log("start")
const scheduler$ = rxjs.from([3,4,5,6], rxjs.asyncScheduler).subscribe(x => console.log(x));
console.log("end")