import SectionWrapper from '../components/SectionWrapper'
import SkillCard from '../components/SkillCard'
import { skillCategories } from '../data/content'

export default function Skills() {
  return (
    <SectionWrapper title="Skillset" subtitle="Capabilities">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category) => (
          <SkillCard key={category.title} title={category.title} items={category.items} />
        ))}
      </div>
    </SectionWrapper>
  )
}
