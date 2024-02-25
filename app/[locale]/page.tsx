import Navbar from "@/components/navbar";
import Certificates from "@/components/sections/certificates";
import Education from "@/components/sections/education";
import Home from "@/components/sections/home";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Home");
  return (
    <>
      <Navbar />
      <div className="flex flex-col px-10 gap-10 pb-10">
        <Home />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
      </div>
    </>
  );
}
