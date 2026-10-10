export default function ProjectCard({ project }) {
  const { title, description, tags, link } = project

  return (
        <article className="card">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="tags">
            {tags.map((tag) => (
            <span key={tag} className="tag">
                {tag}
            </span>
            ))}
        </div>
        <a className="card__link" href={link} target="_blank" rel="noreferrer">
            N/A
        </a>
        </article>
    )
}