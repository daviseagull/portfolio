import { useTranslations } from "next-intl";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type CertificateProps = {
  title: string;
  icon: any;
  issuer: string;
  date: string;
};

export default function Certificate({
  title,
  icon,
  issuer,
  date,
}: CertificateProps) {
  const t = useTranslations("Certificates");
  return (
    <Card>
      <div className="flex  gap-4 px-4">
        <div className="flex items-center justify-center w-1/6">
          <Image className="w-3/4 lg:w-2/4" src={icon} alt="alt" />
        </div>
        <CardHeader className="px-0 ">
          <CardTitle className="lg:text-lg">{title}</CardTitle>
          <CardDescription>
            <p className="lg:text-lg">{issuer}</p>
            <p className="lg:text-lg">{date}</p>
          </CardDescription>
        </CardHeader>
      </div>
    </Card>
  );
}
