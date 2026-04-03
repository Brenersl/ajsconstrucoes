import projectFleet from "@/assets/project-fleet.png";
import projectTruck from "@/assets/project-truck.png";
import projectPyramid from "@/assets/project-pyramid.png";
import projectInterior from "@/assets/project-interior.png";
import projectDrainage from "@/assets/project-drainage.jpg";
import projectBuilding from "@/assets/project-building.jpg";
import projectEngineer from "@/assets/project-engineer.jpg";
import projectExcavator from "@/assets/project-excavator.jpg";

export interface FeaturedProject {
  slug: string;
  name: string;
  category: string;
  cover: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "coleta-residuos-epitacio",
    name: "Coleta de Resíduos — Presidente Epitácio",
    category: "Limpeza Urbana",
    cover: projectFleet,
  },
  {
    slug: "cobertura-piramidal",
    name: "Cobertura Piramidal — Estrutura Metálica",
    category: "Construção Civil",
    cover: projectPyramid,
  },
  {
    slug: "drenagem-infraestrutura",
    name: "Obras de Drenagem e Infraestrutura",
    category: "Infraestrutura",
    cover: projectDrainage,
  },
  {
    slug: "edificacao-comercial",
    name: "Edificação Comercial e Industrial",
    category: "Construção Civil",
    cover: projectBuilding,
  },
];

export const allProjects: string[] = [
  "Ala de Contenção - Estrela do Norte SP",
  "Gestão de Saúde, Segurança do Trabalho, Meio Ambiente e SGI Usiminas - Ipatinga MG",
  "Gestão de Saúde, Segurança do Trabalho, Meio Ambiente e SGI - FLM São Simão GO",
  "Gestão de Saúde, Segurança do Trabalho, Meio Ambiente e SGI - ANX Paulínia SP",
  "Reforma, Revitalização Geral, Adequações Legais Fábrica de Vagões – ANX Paulínia SP",
  "Licenciamento Ambiental – ANX Paulínia SP",
  "Espaço de Saúde - Estrela do Norte SP",
  "Coleta Resíduos Sólidos Urbanos - Santa Helena de Goiás GO",
  "Centro de Convivência - Euclides da Cunha Paulista SP",
  "Pista de Caminhada - Estrela do Norte SP",
  "Centro de Convivência - Tarabai SP",
  "Espaço de Saúde - Presidente Venceslau SP",
  "Espaço de Saúde - Piquerobi SP",
  "Salas de Aula - Estrela do Norte SP",
  "Poste de Led - Estrela do Norte SP",
  "Pista de Caminhada e Calçada - Presidente Venceslau SP",
  "Reforma Recinto - Sandovalina SP",
  "Reforma Escola - Sandovalina SP",
  "Ala de Contenção e Passarela - Sandovalina SP",
  "Reforma Praça - Presidente Venceslau SP",
  "Terraplanagem, Curvas de Nivel, Preparo de Solo e Reforma de Pasto - Estrela do Norte SP",
  "Construções de Estrutura Manejo Agropecuário - Estrela do Norte SP",
  "Plantio de Arvores, Reflorestamento - Estrela do Norte SP",
  "Reforma Pré Escola - Tarabai SP",
  "Construção Barracão Industrial - Lupionópolis PR",
  "Espaço de Saúde - Sandovalina SP",
  "Reforma de Casa – Sandovalina SP",
  "Reforma CCI Bom Pastor - Sandovalina SP",
  "Reforma UPA - Paranavaí PR",
  "Reforma Canteiro Central - Sandovalina SP",
  "Casa da Moeda - Presidente Epitácio SP",
  "Reforma de Casa – Presidente Prudente SP",
  "Revitalização De Área Esportes E Lazer - Mirante do Paranapanema SP",
  "Construção Ciclovia - Ana Rosa Cambé PR",
  "Reforma de Casa - Primavera SP",
  "Revitalização de Avenida - Terra Roxa PR",
  "Construção de Casa Sobrado - Rosana SP",
  "Coleta Resíduos Sólidos Urbanos - Presidente Epitácio SP",
  "Locações de Caminhões Compactadores de Lixo - Alumínio SP",
];

export const galleryImages: string[] = [
  projectFleet,
  projectTruck,
  projectPyramid,
  projectInterior,
  projectDrainage,
  projectBuilding,
  projectEngineer,
  projectExcavator,
];
