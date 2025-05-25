import {
  SiPython,
  SiPytorch,
  SiFastapi,
  SiReact,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiHuggingface,
  SiAntdesign,
  SiOnnx,
  SiLangchain,
} from "react-icons/si";
import { FaRobot, FaGlobe, FaCar, FaServer } from "react-icons/fa";

export type Experience = {
  title: string;
  duration: string;
  position: string;
  teamSize?: number;
  responsibilities: string[];
  objectives: string[];
  techStack: { name: string; icon: any }[];
  links: { label: string; url: string }[];
  awards?: string[];
};

export const experiences: Experience[] = [
  {
    title: "Suggest and Plan Travel Based on Context (Graduation Project)",
    duration: "10/2024 – Present (Developing)",
    position: "AI Engineer, Software Engineer",
    teamSize: 4,
    responsibilities: [
      "Website design and building from start to finish",
      "Prompting, database design",
      "Building multi-agent system",
      "Writing CRUD backend APIs",
      "Deployment",
    ],
    objectives: [
      "Suggest tourist destinations, restaurants, and hotels suited to user needs",
      "Real-time processing",
      "Create flashcards for users to review translated words",
      "Personalize results for users",
    ],
    techStack: [
      { name: "Python", icon: SiPython },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
      { name: "FastAPI", icon: SiFastapi },
      { name: "LangChain", icon: SiLangchain },
      { name: "Langgraph", icon: SiLangchain },
      { name: "ReactJS", icon: SiReact },
      { name: "Ant Design", icon: SiAntdesign },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Hugging Face", icon: SiHuggingface },
    ],
    links: [
      { label: "Website: TriVenture (CSR)", url: "" },
      { label: "Source Code: Private", url: "" },
    ],
  },
  {
    title:
      "Translate Words Based on the Context of the Document (Startup Project)",
    duration: "6/2024 – Present (Developing)",
    position: "AI Engineer, Software Engineer",
    teamSize: 5,
    responsibilities: [
      "Website design and building from start to finish",
      "Prompting, database design",
      "Writing CRUD backend APIs, APIs call large language model with prompting",
      "Deployment",
    ],
    objectives: [
      "Translate words according to correct sentence/document context, in-depth explanation, translate abbreviations",
      "Grammar check",
      "Q&A on documents",
      "Flashcards for users",
    ],
    techStack: [
      { name: "Python", icon: SiPython },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
      { name: "FastAPI", icon: SiFastapi },
      { name: "LangChain", icon: SiLangchain },
      { name: "ReactJS", icon: SiReact },
      { name: "Ant Design", icon: SiAntdesign },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Hugging Face", icon: SiHuggingface },
    ],
    links: [
      {
        label:
          "Website: BANDic+ | Dịch tài liệu trên ngữ cảnh (dichtailieu.vercel.app) (CSR)",
        url: "https://dichtailieu.vercel.app",
      },
      { label: "Source Code: Private", url: "" },
    ],
  },
  {
    title: "Video Facial Verification",
    duration: "6/2024 – 6/2024 (15 days)",
    position: "AI Engineer",
    responsibilities: [
      "Research pre-trained CNN model with faces",
      "Convert model to ONNX",
      "Build an algorithm to cut frames smoothly and accurately",
    ],
    objectives: [
      "Given a video with many people, output frames of faces different from the first person appearing",
    ],
    techStack: [
      { name: "Python", icon: SiPython },
      { name: "PyTorch", icon: SiPytorch },
      { name: "ONNX", icon: SiOnnx },
    ],
    links: [
      {
        label: "Source Code: video-facial-verification (GitHub)",
        url: "https://github.com/abaoxomtieu/video-facial-verification",
      },
    ],
  },
  {
    title: "Product-Management (E-Commerce Website)",
    duration: "2/2024 – 4/2024",
    position: "Software Engineer",
    responsibilities: [
      "Write user and product CRUD APIs, upload photos to Cloudinary",
      "Website and database design",
      "Features: make friends, chat, send pictures",
    ],
    objectives: [
      "Client: home page, login, register, products, product details, realtime chat, cart, purchase, payment",
      "Admin: CRUD product, user",
    ],
    techStack: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "Express", icon: FaServer },
      { name: "Pug", icon: FaGlobe },
      { name: "Socket.IO", icon: FaGlobe },
      { name: "Cloudinary", icon: FaGlobe },
      { name: "Vercel", icon: FaGlobe },
    ],
    links: [
      {
        label: "Website: Trang chủ (abaoxomtieu-shop-product.vercel.app) (SSR)",
        url: "https://abaoxomtieu-shop-product.vercel.app",
      },
      {
        label: "Source Code: Product-Management (GitHub)",
        url: "https://github.com/abaoxomtieu/Product-Management",
      },
    ],
  },
  {
    title:
      "Examining Monitoring System: Detecting Abnormal Behavior In Online Examinations",
    duration: "9/2023 – 2/2024",
    position: "AI Engineer, Software Engineer",
    teamSize: 5,
    responsibilities: [
      "Hyperparameter tuning, evaluation, setup pipeline for inference, quantization",
      "Build front end and back end",
    ],
    objectives: [
      "Detect cheating in real-time online exams through facial expressions",
    ],
    techStack: [
      { name: "Python", icon: SiPython },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "PyTorch", icon: SiPytorch },
      { name: "ONNX", icon: SiOnnx },
      { name: "Optuna", icon: FaRobot },
      { name: "OpenCV", icon: FaRobot },
      { name: "MediaPipe", icon: FaRobot },
      { name: "Django", icon: FaServer },
      { name: "FastAPI", icon: SiFastapi },
    ],
    links: [
      {
        label: "Paper: arXiv: 2402.12179v1",
        url: "https://arxiv.org/abs/2402.12179",
      },
      {
        label: "Source Code: Abnormal_Behavior (GitHub)",
        url: "https://github.com/abaoxomtieu/Abnormal_Behavior",
      },
    ],
    awards: ['Champion "AI for life 2023" competition (FPTU & QAI)'],
  },
  {
    title: "Q&A Chat Bot on Multi-PDF",
    duration: "3/2024 – 3/2024 (2 days)",
    position: "AI Engineer, Software Engineer",
    teamSize: 1,
    responsibilities: [
      "Setup vector database, LLM, prompting",
      "Build website: upload documents, Q&A",
    ],
    objectives: [
      "Q&A chatbot for private PDF data files with RAG architecture",
      "Enhanced security for personal/confidential documents",
    ],
    techStack: [
      { name: "Python", icon: SiPython },
      { name: "LangChain", icon: SiLangchain },
      { name: "Hugging Face", icon: SiHuggingface },
      { name: "Streamlit", icon: FaGlobe },
      { name: "FastAPI", icon: SiFastapi },
    ],
    links: [
      {
        label: "Source Code: RAG-API-VietnamesePDF (GitHub)",
        url: "https://github.com/abaoxomtieu/RAG-API-VietnamesePDF",
      },
    ],
  },
  {
    title: "Detect Vehicles with YOLOv5, YOLOv8, DETR",
    duration: "10/2023 – 2/2024",
    position: "AI Engineer, Software Engineer",
    teamSize: 1,
    responsibilities: [
      "Training pipeline, convert model to ONNX, setup inference with TensorRT",
      "Model evaluation",
      "Build interactive websites",
    ],
    objectives: [
      "Evaluate object detection models on 5-class transportation dataset",
      "Allow users to detect via camera or photo upload",
    ],
    techStack: [
      { name: "Python", icon: SiPython },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Ultralytics", icon: FaCar },
      { name: "ONNX", icon: SiOnnx },
      { name: "OpenCV", icon: FaRobot },
      { name: "Streamlit", icon: FaGlobe },
      { name: "FastAPI", icon: SiFastapi },
    ],
    links: [
      {
        label: "YOLO: YOLOV5-V8-Object-Traffic-Detection (GitHub)",
        url: "https://github.com/abaoxomtieu/YOLOV5-V8-Object-Traffic-Detection",
      },
      {
        label: "DETR: DETR-custom-coco (GitHub)",
        url: "https://github.com/abaoxomtieu/DETR-custom-coco",
      },
    ],
  },
];
