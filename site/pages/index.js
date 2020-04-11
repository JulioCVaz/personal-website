import React, { useState, useEffect } from 'react';
import axios from 'axios'

// components
import Navbar from './components/Navbar';
import ContentHome from './components/ContentHome';
import Card from './components/Card';

const Home = ({ repos }) => {

  const [ screenWidth, setScreenWidth ] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(document.documentElement.scrollTop);
      setScreenWidth(document.documentElement.scrollTop);
    });
  }, []);

  return(
    <>
      <Navbar screen={screenWidth}/>
      {/*<div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
          </div>
        </div>
      </div>*/}
      <div className="background-home">
        <div className="container content-home">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <ContentHome />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {
            repos.map(repo => (
              <div key={repo.id} className="col col-md-4">
                <Card {...repo} />
              </div>
            ))
          } 
        </div>
      </div>
    </>
  )
};


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