// primer parametro: funcion que evalua condicion y devuelve true o false
// segundo parametro: observable que se subscribirá el subscriber si es true
// tercer parametro: observable que se subscribirá el subscriber si es false
// Si la funcion del primer parametro no devuelve nada, se considera false
// Si no se proporciona segundo o tercer parametro, el observable completa inmediatamente

let grantedAccess;
const obsYouHaveAccess$ = rxjs.iif(() => grantedAccess,
rxjs.of("Tienes acceso...!"));//no paso un tercer parametro

//recien se evalúa la condicion del primer parametro en tiempo de subscripcion
// grantedAccess = true;
grantedAccess = false;
obsYouHaveAccess$.subscribe(
    x => console.log(x),
    err => console.log(err),
    () => console.log("Completed...")
);

// let first = true; 
let first = false; 
const pickObservable$ = rxjs.iif(() =>first, 
rxjs.of("First Observable is executing...."),
rxjs.of("Second Observable is executing....") );

pickObservable$.subscribe(x => console.log(x));