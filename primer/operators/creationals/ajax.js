// getting response object from jsonplaceholder fake api
const obs$ = rxjs.ajax.ajax('https://jsonplaceholder.typicode.com/users').pipe(
    rxjs.operators.flatMap(usersResponse => {
        console.log(usersResponse);
        return rxjs.from(usersResponse.response);//asi viene el api
    }),
    rxjs.operators.catchError(err => console.log(err))
)
obs$.subscribe(user => console.log(user.name," - ", user.email));