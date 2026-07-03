import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "FixFlow",
    description:
      "A QR-code service-request platform where tenants scan a code to report issues and managers track them on a dashboard.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    link: "https://github.com/internick2017/fixflow",
  },
  {
    title: "Smart Alt Generator",
    description:
      "A WordPress plugin that generates descriptive alt text for images using AI, improving accessibility and SEO.",
    technologies: ["PHP", "WordPress", "OpenAI API", "PHPUnit"],
    link: "https://github.com/internick2017/smart-alt-generator",
  },
  {
    title: "E-Commerce Data Warehouse",
    description:
      "An end-to-end ELT pipeline that moves Shopify data through S3 into AWS RDS Postgres and a star schema for Power BI reports.",
    technologies: ["Python", "SQL", "AWS", "Power BI"],
    link: "https://github.com/internick2017/ecommerce-data-warehouse",
  },
  {
    title: "Kindly",
    description:
      "An accessibility-ready WordPress block theme for nonprofits and congregations, built to meet WCAG 2.2 AA.",
    technologies: ["WordPress", "CSS", "Accessibility"],
    link: "https://github.com/internick2017/kindly",
  },
];

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 flex-1 w-full">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m a full-stack developer based in Brazil, currently learning
          Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
