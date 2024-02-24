import { useTranslations } from "next-intl";
import LanguageDropdown from "./dropdown/language-dropdown";
import ThemeDropdown from "./dropdown/theme-dropdown";
import MobileMenu from "./mobile-menu";
import { Button } from "./ui/button";

export default function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <div className="bg-background sticky top-0 flex flex-row text-m items-center justify-between px-6 h-16">
      <div className="flex flex-row items-center gap-4">
        <MobileMenu />

        <h1 className="text-xl font-medium">{"<Davi Seagull/>"}</h1>
      </div>
      <div className="flex flex-row text-base ">
        <div className="hidden lg:block">
          <Button className="text-base" variant="ghost">
            {t("buttons.home")}
          </Button>
          <Button className="text-base " variant="ghost">
            {t("buttons.skills")}
          </Button>
          <Button className="text-base" variant="ghost">
            {t("buttons.projects")}
          </Button>
          <Button className="text-base" variant="ghost">
            {t("buttons.education")}
          </Button>
          <Button className="text-base" variant="ghost">
            {t("buttons.contact")}
          </Button>
        </div>
        <ThemeDropdown />
        <LanguageDropdown />
      </div>
    </div>
  );
}