import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
  FaPython,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiFlutter,
  SiReact,
  SiKubernetes,
} from "react-icons/si";

const getSkillIcon = (skill: string) => {
  const iconMap: Record<string, JSX.Element> = {
    HTML: <i className="pi pi-html5 text-[#E44D26]" />,
    CSS: <i className="pi pi-css3 text-[#264DE4]" />,
    JavaScript: <i className="pi pi-javascript text-[#F7DF1E]" />,
    TypeScript: <i className="pi pi-code text-[#3178C6]" />,
    React: <i className="pi pi-react text-[#61DAFB]" />,
    "Next.js": <i className="pi pi-prime text-black dark:text-white" />,
    "Node.js": <i className="pi pi-node text-[#339933]" />,
    NestJS: <i className="pi pi-server text-[#E0234E]" />,
    Express: <i className="pi pi-arrow-right-arrow-left text-[#000000]" />,
    Python: <i className="pi pi-python text-[#3776AB]" />,
    PostgreSQL: <i className="pi pi-database text-[#336791]" />,
    MongoDB: <i className="pi pi-database text-[#47A248]" />,
    Firebase: <i className="pi pi-cloud text-[#FFCA28]" />,
    AWS: <i className="pi pi-aws text-[#FF9900]" />,
    Docker: <i className="pi pi-docker text-[#2496ED]" />,
    Kubernetes: <i className="pi pi-kubernetes text-[#326CE5]" />,
    Flutter: <i className="pi pi-mobile text-[#02569B]" />,
    "React Native": <i className="pi pi-mobile text-[#61DAFB]" />,
  };

  return iconMap[skill] ?? <i className="pi pi-code" />; // Default icon
};

interface SkillCardProps {
  skill: string;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const icon = getSkillIcon(skill);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10">
        <div className="text-lg">{icon}</div>
        <span className="text-sm font-medium text-foreground">{skill}</span>
      </div>
    </motion.div>
  );
};

export default SkillCard;
