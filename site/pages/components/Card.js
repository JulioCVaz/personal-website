const Card = repo => (
    <div key={repo.id} className="card" style={{width: '18rem'}}>
        <div className="card-body">
        <h5 className="card-title">{repo.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{repo.language}</h6>
        <p className="card-text">{repo.description}</p>
        <a href="#" className="card-link">Acessar Projeto</a>
        <a href={repo.html_url} className="card-link">Acessar repositório</a>
        </div>
    </div>
)

export default Card;