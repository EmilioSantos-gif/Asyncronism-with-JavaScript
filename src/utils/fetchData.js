let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
    return new Promise ((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('GET', url_api, true);
        request.onreadystatechange = () => {
                if (request.readyState === 4) {
                    (request.status === 200)
                        ? resolve(JSON.parse(request.responseText))
                        : reject(new Error("Error in: " + url_api))
                }
        }
    request.send();
    });
}

module.exports = fetchData;