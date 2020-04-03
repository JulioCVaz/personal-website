import React from 'react';
import axios from 'axios'

// components
import Navbar from './components/Navbar';
import Card from './components/Card';

const Home = ({ repos }) => (
  <>
    <Navbar />
    <div class="container">
      <div className="row">
        {
          repos.map(repo => (
            <div className="col col-md-4">
              <Card {...repo} />
            </div>
          ))
        } 
      </div>
    </div>
  </>
)


export async function getStaticProps(){
  const default_repos = ['som-de-garagem', 'typing-battle', 'pokehooks'];

  let repos = await axios.get('https://api.github.com/users/juliocvaz/repos');

  repos = repos.data.filter(repo => {
    if(default_repos.indexOf(repo.name) !== -1){
      return repo;
    }
  });

  console.log(repos[0]);

  return {
    props: {
      repos
    }
  }
}

export default Home;