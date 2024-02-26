import mackenzieLogo from "@/public/education/mackenzie.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";

export default function Education() {
  const t = useTranslations("Education");
  return (
    <div id="education" className="flex flex-col gap-4 pt-16 lg:gap-14 ">
      <Label className="text-xl font-bold lg:text-4xl">{t("title")}</Label>
      <Card className="p-4">
        <div className="flex gap-4">
          <div className="flex w-1/12">
            <Image src={mackenzieLogo} alt="alt" />
          </div>
          <CardHeader className="px-0 ">
            <CardTitle className="lg:text-2xl">
              {t("educations.mackenzie.degree")}
            </CardTitle>
            <CardDescription>
              <p className="lg:text-lg">Universidade Presbiteriana Mackenzie</p>
              <p className="lg:text-lg">{t("educations.mackenzie.country")}</p>
              <p className="lg:text-lg">2019-2023</p>
            </CardDescription>
          </CardHeader>
        </div>
      </Card>
    </div>
  );
}
