import SectionWrapper from '../components/SectionWrapper'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <SectionWrapper title="Projects" subtitle="Highlights">
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  )
}
