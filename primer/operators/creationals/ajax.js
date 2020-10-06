// getting response object from jsonplaceholder fake api
const obs$ = rxjs.ajax.ajax('https://jsonplaceholder.typicode.com/users').pipe(
    rxjs.operators.flatMap(usersResponse => {
        console.log(usersResponse);
        return rxjs.from(usersResponse.response);//asi viene el api
    }),
    rxjs.operators.catchError(err => console.log(err))
)
obs$.subscribe(user => console.log(user.name," - ", user.email));

//The same but using getJSON()

const obs2$ = rxjs.ajax.ajax.getJSON('https://jsonplaceholder.typicode.com/users').pipe(
    rxjs.operators.flatMap(response => {
        return rxjs.from(response);
    }),
    rxjs.operators.catchError(err => console.log(err))
).subscribe(user => console.log(user.username));

const obs3$ = rxjs.ajax.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: 'POST',
    body: JSON.stringify({
        name: "pedro",
        username: "pedritobata",
        email: "pedritobata@gmail.com"
    }),
    headers: {
        'Content-Type': "application/json; charset=UTF-8"
    }

}).pipe(
    rxjs.operators.map(response => {
         return response;
    }),
    rxjs.operators.catchError(err => console.log(err))
).subscribe(resp => console.log(resp.status, resp.response));

// retornando el error
const obs4$ = rxjs.ajax.ajax("https://jsonplaceholder.typicode.com/userss").pipe(
    rxjs.operators.map(response => rxjs.of(response)),
    rxjs.operators.catchError(err => {
        return rxjs.of(err);
    })
).subscribe(resp => console.log(resp));