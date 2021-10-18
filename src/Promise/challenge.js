
const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
    .then((response) => {
        console.log(response.info.count);
        fetchData(`${API}${response.results[0].id}`)
            .then((response) => {
                console.log(response.name);
                fetchData(response.origin.url)
                    .then(response => console.log(response.dimension))
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
    })
    .catch(err => console.error(err));

    