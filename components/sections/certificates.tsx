import awsIcon from "@/public/certificates/aws.svg";
import ibmIcon from "@/public/certificates/ibm.svg";

import { useTranslations } from "next-intl";
import Certificate from "../certificate";
import { Label } from "../ui/label";

export default function Certificates() {
  const t = useTranslations("Certificates");
  return (
    <div id="certificates" className="flex flex-col gap-4 pt-16 md:gap-14 ">
      <Label className="text-xl font-bold md:text-4xl">{t("title")}</Label>
      <Certificate
        icon={awsIcon}
        title="AWS - Cloud Practiotioner"
        issuer="Amazon Web Services - AWS"
        date="2023"
      />
      <Certificate
        icon={ibmIcon}
        title="Developer Profession - Level 1"
        issuer="IBM"
        date="2023"
      />
    </div>
  );
}
