import SectionWrapper from '../components/SectionWrapper'
import ExperienceItem from '../components/ExperienceItem'
import { experiences } from '../data/content'

export default function WorkExperience() {
  return (
    <SectionWrapper title="Experience" subtitle="Journey">
      <ul className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceItem key={experience.role} index={index} {...experience} />
        ))}
      </ul>
    </SectionWrapper>
  )
}
