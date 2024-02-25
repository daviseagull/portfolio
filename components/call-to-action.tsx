import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DownloadIcon, SendIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CallToAction() {
  const t = useTranslations("Home");
  return (
    <div className="flex gap-9  justify-center">
      <Button variant="outline" className="cursor-pointer">
        <SendIcon className="h-4" />
        <Label>{t("buttons.contact-me")}</Label>
      </Button>
      <Button variant="outline" className=" cursor-pointer">
        <DownloadIcon className="h-4" />
        <Label>{t("buttons.download-cv")}</Label>
      </Button>
    </div>
  );
}
