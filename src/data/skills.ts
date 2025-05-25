import {
  SiPytorch,
  SiFastapi,
  SiReact,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiDocker,
  SiMongodb,
  SiHuggingface,
  SiOnnx,
  SiLangchain,
  SiAmazon,
  SiMysql,
} from "react-icons/si";
import { FaBrain, FaRobot, FaMicrosoft } from "react-icons/fa";

export type Skill = {
  area: string;
  name: string;
  icon: any;
  proficiency: string;
};

export const skills: Skill[] = [
  // Artificial Intelligence
  {
    area: "Artificial Intelligence",
    name: "Generative AI (LLM)",
    icon: FaBrain,
    proficiency: "5 - Applied theory",
  },
  {
    area: "Artificial Intelligence",
    name: "Convolutional Neural Networks",
    icon: FaRobot,
    proficiency: "4 - Applied theory",
  },
  {
    area: "Artificial Intelligence",
    name: "Natural Language Processing",
    icon: FaBrain,
    proficiency: "4 - Applied theory",
  },
  {
    area: "Artificial Intelligence",
    name: "LangChain & LangGraph",
    icon: SiLangchain,
    proficiency: "5 - Applied theory",
  },
  {
    area: "Artificial Intelligence",
    name: "PyTorch",
    icon: SiPytorch,
    proficiency: "4 - Applied theory",
  },
  {
    area: "Artificial Intelligence",
    name: "Hugging Face",
    icon: SiHuggingface,
    proficiency: "4 - Applied theory",
  },
  // Software
  {
    area: "Software",
    name: "ReactJS",
    icon: SiReact,
    proficiency: "4 - Applied theory",
  },
  {
    area: "Software",
    name: "TypeScript",
    icon: SiTypescript,
    proficiency: "4 - Applied theory",
  },
  {
    area: "Software",
    name: "MongoDB",
    icon: SiMongodb,
    proficiency: "4 - Applied theory",
  },
  {
    area: "Software",
    name: "SQL",
    icon: SiMysql,
    proficiency: "4 - Applied theory",
  },
  {
    area: "Software",
    name: "FastAPI",
    icon: SiFastapi,
    proficiency: "5 - Applied theory",
  },
  {
    area: "Software",
    name: "HTML",
    icon: SiHtml5,
    proficiency: "5 - Applied theory",
  },
  {
    area: "Software",
    name: "CSS",
    icon: SiCss3,
    proficiency: "4 - Applied theory",
  },
  {
    area: "Software",
    name: "JavaScript",
    icon: SiJavascript,
    proficiency: "4 - Applied theory",
  },
  // MLOps
  {
    area: "MLOps",
    name: "ONNX",
    icon: SiOnnx,
    proficiency: "4 - Applied theory",
  },
  {
    area: "MLOps",
    name: "Docker",
    icon: SiDocker,
    proficiency: "4 - Practical App",
  },
  {
    area: "MLOps",
    name: "AWS",
    icon: SiAmazon,
    proficiency: "3 - Applied theory",
  },
  {
    area: "MLOps",
    name: "Azure",
    icon: FaMicrosoft,
    proficiency: "3 - Applied theory",
  },
];
