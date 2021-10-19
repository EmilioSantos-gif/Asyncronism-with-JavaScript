//Definicion promesa
const myPromise = () => {
    return new Promise( (resolve, reject) => {
        true
            ? setTimeout( () => {
                    resolve('Resolved promise')
                }, 2000)
            : reject(new Error('Rejected promise'));
    });
}

//Invocar funcion con async/await
const myAsync = async () => {
    console.log('Calling Promise');
    const promiseResult = await myPromise(); 
    console.log(promiseResult);
}

console.log('Before')
myAsync();
console.log('After')
