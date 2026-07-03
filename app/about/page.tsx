import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 flex-1 w-full">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        I&apos;m Nick Granados, a full-stack web developer based in Brazil. I
        have built projects with WordPress, Laravel, Django, and Next.js, and I
        am currently studying Web Full-Stack Development at BYU-Pathway to
        strengthen my React and Next.js skills.
      </p>
      <h3 className="text-2xl font-bold mb-4">My Skills</h3>
      <div className="grid gap-4 md:grid-cols-3">
        <SkillCard
          category="Frontend"
          skills={["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"]}
        />
        <SkillCard
          category="Backend"
          skills={["Node.js", "PHP", "Laravel", "Python", "Django"]}
        />
        <SkillCard
          category="Data & Cloud"
          skills={["PostgreSQL", "Supabase", "AWS", "SQL", "Power BI"]}
        />
      </div>
    </main>
  );
}
