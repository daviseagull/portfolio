import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Certificates from "@/components/sections/certificates";
import { Contact } from "@/components/sections/contact";
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
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col  gap-10 pb-10 md:w-3/4">
          <Home />
          <Skills />
          <Projects />
          <Education />
          <Certificates />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}
