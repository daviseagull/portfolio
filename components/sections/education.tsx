import mackenzieLogo from "@/public/education/mackenzie.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";

export default function Education() {
  const t = useTranslations("Education");
  return (
    <div className="flex flex-col gap-4">
      <Label className="text-xl font-bold">{t("title")}</Label>
      <Card>
        <div className="flex justify-evenly">
          <Image src={mackenzieLogo} width={64} alt="alt" />
          <CardHeader>
            <CardTitle>{t("educations.mackenzie.degree")}</CardTitle>
            <CardDescription>
              <p>Universidade Presbiteriana Mackenzie</p>
              <p>{t("educations.mackenzie.country")}</p>
              <p>2019-2023</p>
            </CardDescription>
          </CardHeader>
        </div>
      </Card>
    </div>
  );
}
