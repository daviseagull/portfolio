import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Home");
  return <Label>{t("greeting")}</Label>;
}
