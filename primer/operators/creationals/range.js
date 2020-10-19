const range$ = rxjs.range(3,10);

const subscription = range$.subscribe(x => console.log(x));