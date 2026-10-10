import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects">
        <div className="container">
            <h2 className="section__title">Creaciónes</h2>
            <p className="section__subtitle">
            Algunas cositas que he hecho
            </p>

            <div className="projects__grid">
            {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
            ))}
            </div>
        </div>
    </section>
    )
}