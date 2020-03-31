import React, {Component} from 'react'
import axios from 'axios';


const Home = ({ repos }) => (
  <div>
    <ul>
      {
        repos.map(repo => (
            <li key={repo.id}>{repo.name}</li>
        ))
      }
    </ul>
    <div>
      <button>Teste</button>
    </div>
  </div>
)


export async function getStaticProps(){
  const default_repos = ['som-de-garagem', 'typing-battle', 'pokehooks'];

  let repos = await axios.get('https://api.github.com/users/juliocvaz/repos');

  repos = repos.data.filter(repo => {
    if(default_repos.indexOf(repo.name) !== -1){
      return repo;
    }
  });

  return {
    props: {
      repos
    }
  }
}

export default Home;