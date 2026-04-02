import projectFleet from "@/assets/project-fleet.png";
import projectTruck from "@/assets/project-truck.png";
import projectPyramid from "@/assets/project-pyramid.png";
import projectInterior from "@/assets/project-interior.png";
import projectDrainage from "@/assets/project-drainage.jpg";
import projectBuilding from "@/assets/project-building.jpg";
import projectEngineer from "@/assets/project-engineer.jpg";
import projectExcavator from "@/assets/project-excavator.jpg";

export interface Project {
  slug: string;
  name: string;
  category: string;
  type: string;
  location: string;
  status: string;
  description: string;
  cover: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: "coleta-residuos-epitacio",
    name: "Coleta de Resíduos — Presidente Epitácio",
    category: "Limpeza Urbana",
    type: "Coleta e Transporte de Resíduos Sólidos",
    location: "Presidente Epitácio — SP",
    status: "Em operação",
    description: "Operação completa de coleta de resíduos sólidos urbanos no município de Presidente Epitácio, com frota moderna e equipe especializada, atendendo toda a área urbana e distritos.",
    cover: projectFleet,
    gallery: [projectFleet, projectTruck],
  },
  {
    slug: "cobertura-piramidal",
    name: "Cobertura Piramidal — Estrutura Metálica",
    category: "Construção Civil",
    type: "Estrutura Metálica e Cobertura",
    location: "Interior de São Paulo",
    status: "Concluído",
    description: "Projeto e execução de cobertura piramidal em estrutura metálica com fechamento em telhas metálicas, demonstrando capacidade em obras de geometria complexa e acabamento de alto padrão.",
    cover: projectPyramid,
    gallery: [projectPyramid, projectInterior],
  },
  {
    slug: "drenagem-infraestrutura",
    name: "Obras de Drenagem e Infraestrutura",
    category: "Infraestrutura",
    type: "Drenagem e Terraplanagem",
    location: "Região Oeste — SP",
    status: "Concluído",
    description: "Execução de obras de drenagem pluvial, instalação de tubulações de grande porte e terraplanagem, contribuindo para a infraestrutura viária e prevenção de enchentes na região.",
    cover: projectDrainage,
    gallery: [projectDrainage, projectExcavator],
  },
  {
    slug: "edificacao-comercial",
    name: "Edificação Comercial e Industrial",
    category: "Construção Civil",
    type: "Edificação Comercial",
    location: "Interior de São Paulo",
    status: "Concluído",
    description: "Construção de edificação comercial e industrial com estrutura pré-moldada, cobertura metálica e acabamentos internos em granito, atendendo aos mais altos padrões de qualidade construtiva.",
    cover: projectBuilding,
    gallery: [projectBuilding, projectInterior, projectEngineer],
  },
  {
    slug: "terraplanagem-escavacao",
    name: "Terraplanagem e Escavação Mecanizada",
    category: "Infraestrutura",
    type: "Terraplanagem",
    location: "Região Oeste — SP",
    status: "Concluído",
    description: "Serviços de terraplanagem e escavação mecanizada com equipamentos de grande porte, preparando terrenos para obras de infraestrutura e edificações de alto padrão.",
    cover: projectExcavator,
    gallery: [projectExcavator, projectDrainage],
  },
  {
    slug: "frota-coleta-urbana",
    name: "Gestão de Frota — Coleta Urbana",
    category: "Limpeza Urbana",
    type: "Gestão de Frota e Coleta",
    location: "Diversos Municípios — SP",
    status: "Em operação",
    description: "Gestão e operação de frota completa de veículos coletores compactadores para serviços de limpeza urbana em múltiplos municípios do interior paulista.",
    cover: projectTruck,
    gallery: [projectTruck, projectFleet],
  },
];
