import Home from "@/components/home";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
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
      </div>
    </>
  );
}
