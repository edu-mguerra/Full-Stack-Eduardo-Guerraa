import './style.css';

export const Stats = () => {
  return (
    <>
      <div className="github-stats">
        <h4>GitHub Stats</h4>
        <a href="https://github.com/edu-mguerra">
          <img className='gitStatsImg' height="180px" src="https://github-readme-stats.vercel.app/api/top-langs/?username=edu-mguerra&layout=compact&langs_count=7&theme=highcontrast&hide=html,css&hide_title=true" />
        </a>

        <div className="github-card">
          <a href="https://github.com/edu-mguerra" target="_blank" rel="noopener noreferrer">
            <div className="github-card-content">
              <h4>Visite meu GitHub</h4>
              <p>Explore meus projetos!</p>
            </div>
          </a>
        </div>
      </div>



    </>
  )
}
