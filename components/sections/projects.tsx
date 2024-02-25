import { useTranslations } from "next-intl";
import Project from "../project";
import { Label } from "../ui/label";

export default function Projects() {
  const t = useTranslations("Projects");
  return (
    <div id="projects" className="flex flex-col gap-4 pt-16 md:gap-14 ">
      <Label className="text-xl font-bold md:text-4xl">{t("title")}</Label>
      <Project
        title={t("projects.tegla-nfe.title")}
        description={t("projects.tegla-nfe.description")}
        stack={["React", "NodeJS", "SQL Server"]}
      />
      <Project
        title={t("projects.mrs-inloco.title")}
        description={t("projects.mrs-inloco.description")}
        stack={["Java", "Spring", "Azure", "MongoDB"]}
      />
    </div>
  );
}
