import IconCloudDemo from "@/components/globe";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Code2, Cpu, Database, Layout, Paintbrush } from "lucide-react";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import {
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaNodeJs,
} from "react-icons/fa";
import { FcWorkflow } from "react-icons/fc";
import {
  SiDart,
  SiFirebase,
  SiFlutter,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>

    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>

        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {

  const skillCategories = [

    {
      icon: Code2,
      title: "Mobile App Development",
      color: "text-blue-400",
      skills: [
        { name: "Flutter", icon: <SiFlutter className="w-4 h-4 text-[#02569B]" /> },
        { name: "Dart", icon: <SiDart className="w-4 h-4 text-[#0175C2]" /> },
        { name: "Clean Architecture", icon: <Layout className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "REST API", icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "Google Maps", icon: <Database className="w-4 h-4 text-[#EA4335]" /> },
      ],
    },

    {
      icon: Cpu,
      title: "State Management",
      color: "text-purple-400",
      skills: [
        { name: "Riverpod", icon: <FcWorkflow className="w-4 h-4" /> },
        { name: "Provider", icon: <Layout className="w-4 h-4 text-green-400" /> },
        { name: "Dependency Injection", icon: <FcWorkflow className="w-4 h-4" /> },
        { name: "Freezed", icon: <BsFileEarmarkCode className="w-4 h-4 text-pink-400" /> },
        { name: "Dio", icon: <BsGrid1X2 className="w-4 h-4 text-cyan-400" /> },
      ],
    },

    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
        { name: "Express.js", icon: <FaNodeJs className="w-4 h-4 text-gray-200" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "REST APIs", icon: <BsGrid1X2 className="w-4 h-4 text-orange-400" /> },
      ],
    },

    {
      icon: Layout,
      title: "Database & Offline Storage",
      color: "text-pink-400",
      skills: [
        { name: "SQLite", icon: <SiSqlite className="w-4 h-4 text-[#003B57]" /> },
        { name: "Drift", icon: <Database className="w-4 h-4 text-indigo-400" /> },
        { name: "Hive", icon: <Database className="w-4 h-4 text-yellow-400" /> },
        { name: "Local Storage", icon: <Database className="w-4 h-4 text-teal-400" /> },
      ],
    },

    {
      icon: Cloud,
      title: "Cloud & Backend Services",
      color: "text-orange-400",
      skills: [
        { name: "Firebase", icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" /> },
        { name: "Firebase Auth", icon: <SiFirebase className="w-4 h-4 text-[#FFA000]" /> },
        { name: "Cloud Functions", icon: <Cloud className="w-4 h-4 text-blue-400" /> },
        { name: "Storage", icon: <Database className="w-4 h-4 text-green-400" /> },
      ],
    },

    {
      icon: Paintbrush,
      title: "Tools & Environment",
      color: "text-yellow-400",
      skills: [
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
        { name: "Android Studio", icon: <Cpu className="w-4 h-4 text-[#3DDC84]" /> },
        { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
      ],
    },

  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">

      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">

        <div className="flex justify-center items-center">
          <IconCloudDemo />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}

        </div>

      </section>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .bg-grid-pattern {
          background-image:
          linear-gradient(to right, rgba(100,100,255,0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(100,100,255,0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>

    </main>
  );
};

export default SkillsSection;