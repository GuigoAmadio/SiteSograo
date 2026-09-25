import { PageHero } from "../components/PageHero";
import { ProjectBoard } from "../components/ProjectBoard";

export function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Mandato municipal"
        lead="O que o Elcio já fez em Campinas, separado por tipo: lei, ato, serviço na rua, cargo e gestão."
      />
      <ProjectBoard />
    </>
  );
}
