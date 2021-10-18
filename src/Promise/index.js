const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("Promise Resolved");
            } ,2000);
        } else {
            let error = new Error("Rejected")
            reject(error)
        }
    });
}

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("hey");
        } else {
            let error = new Error("Error promise 2")
            reject(error)
        }
    });
}

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => console.log("Array of results: ",response))
    .catch(err => console.log(err));

console.log("Fin del codigo")