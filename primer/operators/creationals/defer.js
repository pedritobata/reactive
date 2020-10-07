// defer crea un observable solo cuando el subscriptor se subscribe
//para esto usa un callback que le mandamos como factory para decir qué tipo
//de observable debe crear.
//cada observable que se crea es nuevecito


console.log("********** defer **********");
const defer$ = rxjs.defer(() => {
    return (
        Math.random() > 0.5 ? 
        rxjs.fromEvent(btnDefer, "click") :
        rxjs.interval(1000)
    );
});

const btnDefer = document.getElementById('btnDefer');

//cada vez que cargue la pagina el random hará que se cree un observable al azar , o bien froMEvent
//o bien interval
defer$.subscribe(x => console.log(x));