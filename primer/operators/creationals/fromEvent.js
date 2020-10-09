// Solo puede ser aplicado a cierto tipo de objetos que emiten eventos y tienen una 
//API con determinados tipos especficios de metodos para agregar y quitar handlers
// acepta: Event target del DOM, event emmiters de Node js, NodeList del DOM, HTMLCollection
//objetos jquery que usan metodos on y off en su api

// Para un objeto del DOM

const btnTest1 = document.getElementById("btnTest1");

const event$ = rxjs.fromEvent(btnTest1, "click");
event$.subscribe(x => console.log(x));
