import { projectGroups } from '../data/campaign'
import { WorkIcon } from './Icons'

export function ProjectBoard() {
  return (
    <section className="section deed-board" id="projetos">
      <div className="container">
        {projectGroups.map((group) => (
          <div className="deed-group" key={group.id}>
            <header className="deed-group-head">
              <span className="deed-group-mark">
                <WorkIcon name={group.icon} />
              </span>
              <div>
                <p className="eyebrow">{group.kicker}</p>
                <h2>{group.title}</h2>
                <p className="deed-group-lead">{group.lead}</p>
              </div>
              <small className="deed-count">
                {String(group.items.length).padStart(2, '0')}
              </small>
            </header>

            <div className={`deed-list count-${group.items.length}`}>
              {group.items.map((item) => (
                <article className="deed-ticket" key={item.title}>
                  <div className="deed-stub">
                    <WorkIcon name={item.icon} />
                    <small>{group.stamp}</small>
                  </div>
                  <div className="deed-body">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    {item.url ? (
                      <a className="btn-source" href={item.url} target="_blank" rel="noreferrer">
                        Ver Fonte
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
