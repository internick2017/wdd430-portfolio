interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <section className="p-4 bg-gray-50 border border-gray-200 rounded shadow-sm">
      <h3 className="text-lg font-bold mb-3 text-blue-700">{category}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="px-3 py-1 bg-blue-100 text-blue-900 text-sm rounded-full"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
