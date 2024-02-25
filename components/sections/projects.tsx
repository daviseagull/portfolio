import { useTranslations } from "next-intl";
import Project from "../project";
import { Label } from "../ui/label";

export default function Projects() {
  const t = useTranslations("Projects");
  return (
    <div className="flex flex-col gap-4">
      <Label className="text-xl font-bold">{t("title")}</Label>
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
