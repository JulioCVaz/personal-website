const express = require('express');
const server = express();
const axios = require('axios');

server.get('/', async (_, res) => {
    const repos = await axios.get('https://api.github.com/users/juliocvaz/repos');
    const repositores_home = ['pokehooks', 'som-de-garagem', 'typing-battle'];
    const list_repos = repos.data.filter(repo => {
        if(repositores_home.indexOf(repo.name) !== -1){
            return repo;
        }
    });
    return res.send(list_repos);
})

server.listen(3333);