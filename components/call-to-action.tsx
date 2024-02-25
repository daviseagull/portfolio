import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DownloadIcon, SendIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CallToAction() {
  const t = useTranslations("Home");
  return (
    <div className=" flex gap-9">
      <Button variant="outline" className="h-14">
        <SendIcon className="h-4 cursor-pointer" />
        <Label className="text-xl cursor-pointer">
          {t("buttons.contact-me")}
        </Label>
      </Button>
      <Button variant="outline" className="h-14 cursor-pointer">
        <DownloadIcon className="h-4 cursor-pointer" />
        <Label className="text-xl cursor-pointer">
          {t("buttons.download-cv")}
        </Label>
      </Button>
    </div>
  );
}
