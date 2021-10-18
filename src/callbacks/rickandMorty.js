/*
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/'

function fetchData(url_api, callback) {
    let request = new XMLHttpRequest();
    request.open('GET', url_api, true);
    request.onreadystatechange = function (event) {
        if (request.readyState === 4) {
            if (request.status === 200) {
                callback(null, JSON.parse(request.responseText));
            } else {
                const error = new Error('Error' + url_api);
                return callback(error, null);
            }
        }
    }
    request.send();
}

fetchData(API, function (error1, data1) {
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function (error2, data2) {
    if (error2) return console.error(error2);
        fetchData(data2.origin.url, function (error3, data3) {
        if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});



var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var req = new XMLHttpRequest();

req.open('GET', 'https://rickandmortyapi.com/api/character/', true);
req.onreadystatechange = function (aEvt) {
  if (req.readyState == 4) {
     if(req.status == 200) {
        console.log(JSON.parse(req.responseText).info.count);
        console.log(JSON.parse(req.responseText).results[0].name);

        console.log();
        
        var req2 = new XMLHttpRequest();

        req2.open('GET', JSON.parse(req.responseText).results[0].origin.url, true);
        req2.onreadystatechange = function (event) {
            if (req2.readyState == 4) {
                if (req2.status == 200) {
                    console.log(JSON.parse(req2.responseText).dimension);
                }
            } 
        }
        req2.send(null)
     }     
  }
};
req.send(null);
*/




let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/'
let personaje = 1;
let datosPersonaje = {};

function fetchData(url_api, callback) {
    let request = new XMLHttpRequest();
    request.open('GET', url_api, true);
    request.onreadystatechange = function (event) {
        if (request.readyState === 4) {
            if (request.status === 200) {
                return callback(JSON.parse(request.responseText), null);
            } else {
                let error = new Error('Error ' + url_api);
                return callback(null, error);
            }
        }
    }
    request.send();
}

fetchData(API, function (data1, error1) {
    if (error1) return console.log(error1);
    fetchData(API + data1.results[personaje-1].id, function (data2, error2) {
        if (error2) return console.log(error2);
        fetchData(data2.origin.url, function (data3, error3) {
        if (error3) return console.log(error3);
            datosPersonaje.total = data1.info.count;
            datosPersonaje.name = data2.name; 
            datosPersonaje.origin = data3.dimension;
            console.log(datosPersonaje);
        });
    });
});