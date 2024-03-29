import awsIcon from "@/public/skills/aws.svg";
import azureIcon from "@/public/skills/azure.svg";
import githubActionsIcon from "@/public/skills/github-actions.svg";
import javaIcon from "@/public/skills/java.svg";
import javascriptIcon from "@/public/skills/javascript.svg";
import jenkinsIcon from "@/public/skills/jenkins.svg";
import mongoIcon from "@/public/skills/mongodb.svg";
import mysqlIcon from "@/public/skills/mysql.svg";
import nestIcon from "@/public/skills/nestjs.svg";
import nextIcon from "@/public/skills/nextjs.svg";
import nodeIcon from "@/public/skills/nodejs.svg";
import postgresIcon from "@/public/skills/postgresql.svg";
import reactIcon from "@/public/skills/react.svg";
import springIcon from "@/public/skills/spring.svg";
import tailwindIcon from "@/public/skills/tailwind.svg";
import typescriptIcon from "@/public/skills/typescript.svg";
import { useTranslations } from "next-intl";
import Logo from "../logo";
import { Label } from "../ui/label";

export default function Skills() {
  const t = useTranslations("Skills");
  return (
    <div
      id="skills"
      className="flex flex-col justify-evenly gap-4 pt-16 lg:items-center lg:gap-14"
    >
      <h2 className="text-xl font-bold lg:text-4xl">{t("title")}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="flex flex-col gap-4 items-center justify-center">
          <Label className="text-base font-bold">{t("languages")}</Label>
          <div className="flex gap-4 items-end">
            <Logo label="Typescript" skill={typescriptIcon} />
            <Logo label="Java" skill={javaIcon} />
            <Logo label="Javascript" skill={javascriptIcon} />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <Label className="text-base font-bold">Front-end</Label>
          <div className="flex gap-4 items-end">
            <Logo label="React" skill={reactIcon} />
            <Logo label="NextJS" skill={nextIcon} />
            <Logo label="TailwindCSS" skill={tailwindIcon} />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <Label className="text-base font-bold">Back-end</Label>
          <div className="flex gap-4 items-end ">
            <Logo label="NodeJS" skill={nodeIcon} />
            <Logo label="NestJS" skill={nestIcon} />
            <Logo label="Spring" skill={springIcon} />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <Label className="text-base font-bold">{t("databases")}</Label>
          <div className="flex gap-4 items-end ">
            <Logo label="MongoDB" skill={mongoIcon} />
            <Logo label="MySQL" skill={mysqlIcon} />
            <Logo label="PostgreSQL" skill={postgresIcon} />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <Label className="text-base font-bold">{t("cloud-providers")}</Label>
          <div className="flex gap-4 items-end ">
            <Logo label="AWS" skill={awsIcon} />
            <Logo label="Azure" skill={azureIcon} />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <Label className="text-base font-bold">CI/CD</Label>
          <div className="flex gap-4 items-end ">
            <Logo label="Jenkins" skill={jenkinsIcon} />
            <Logo label="Actions" skill={githubActionsIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
