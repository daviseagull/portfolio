import mackenzieLogo from "@/public/education/mackenzie.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";

export default function Education() {
  const t = useTranslations("Education");
  return (
    <div id="education" className="flex flex-col gap-4 pt-16 md:gap-14 ">
      <Label className="text-xl font-bold md:text-4xl">{t("title")}</Label>
      <Card>
        <div className="flex gap-4 px-4">
          <div className="flex items-center justify-center w-1/6">
            <Image className="w-3/4 md:w-2/4" src={mackenzieLogo} alt="alt" />
          </div>
          <CardHeader className="px-0 ">
            <CardTitle className="md:text-2xl">
              {t("educations.mackenzie.degree")}
            </CardTitle>
            <CardDescription>
              <p className="md:text-lg">Universidade Presbiteriana Mackenzie</p>
              <p className="md:text-lg">{t("educations.mackenzie.country")}</p>
              <p className="md:text-lg">2019-2023</p>
            </CardDescription>
          </CardHeader>
        </div>
      </Card>
    </div>
  );
}
