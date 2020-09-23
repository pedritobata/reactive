//const { Observable } = require("rxjs");

const c = console.log;
c("Bienvenido a RXJS!!");

//const {fromEvent} = require('rxjs');

// Creando Observable
const btnTest1 = document.getElementById('btnTest1');
const myObservable = rxjs.fromEvent(btnTest1, 'click');

// Subscribiendo el Observer con una function
const mySubscription = myObservable.subscribe(event => {
    c('subscription to event:', event);
   
});

// Subscribiendo con un Object
const mySubscription2 = myObservable.subscribe({
    next: event => {
        c('second subscription', event);
       
    },
    error: err => c('something went wrong', err),
    complete: () => c("Everything is working clean!!")
});

mySubscription2.unsubscribe(() => {});

// Creamos un Observable a partir de argumentos
const numbers = rxjs.of(1,2,3,4,5,6);
// Creamos un pipe de operators y subscribimos
const numbersSubscription = numbers.pipe(
    rxjs.operators.filter(num => num >= 4),
    rxjs.operators.map(num => {
        throw new Error("Error thrown");
        return ++num;
    }),
    rxjs.operators.catchError(err => c("Caught Error!!!"))
).subscribe((num) => {
    c(num);
    
});

const ticksObservable = new rxjs.Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 2000);
});

const tickSubscription = ticksObservable.subscribe({
    next(x){c(x)},
    error(err){c(err)},
    complete(){
        c("Observable Ticker finished!!");
        tickSubscription.unsubscribe(()=> {c("Unsubscribed from Ticker Observable.")});
    }
});







