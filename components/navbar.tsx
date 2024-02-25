import { useTranslations } from "next-intl";
import Link from "next/link";
import LanguageDropdown from "./dropdown/language-dropdown";
import ThemeDropdown from "./dropdown/theme-dropdown";
import { Button } from "./ui/button";

export default function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <div className="bg-background sticky top-0 flex flex-row text-m items-center justify-between px-6 h-14">
      <h1 className="text-xl font-medium">{"<Davi Seagull/>"}</h1>
      <div className="flex flex-row text-base ">
        <div className="hidden lg:block">
          <Link href="#home">
            <Button className="text-base" variant="ghost">
              {t("buttons.home")}
            </Button>
          </Link>

          <Link href="#skills">
            <Button className="text-base " variant="ghost">
              {t("buttons.skills")}
            </Button>
          </Link>
          <Link href="#projects">
            <Button className="text-base" variant="ghost">
              {t("buttons.projects")}
            </Button>
          </Link>
          <Link href="#education">
            <Button className="text-base" variant="ghost">
              {t("buttons.education")}
            </Button>
          </Link>
          <Link href="#contact">
            <Button className="text-base" variant="ghost">
              {t("buttons.contact")}
            </Button>
          </Link>
        </div>
        <ThemeDropdown />
        <LanguageDropdown />
      </div>
    </div>
  );
}
