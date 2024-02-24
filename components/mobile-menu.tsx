import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function MobileMenu() {
  const t = useTranslations("Navbar");
  return (
    <div className="block lg:hidden">
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <h1 className="text-xl font-medium ">{"<Davi Seagull/>"}</h1>
            </DrawerHeader>
            <div className="flex flex-col ">
              <Button className="text-base justify-start" variant="ghost">
                {t("buttons.home")}
              </Button>
              <Button className="text-base justify-start" variant="ghost">
                {t("buttons.skills")}
              </Button>
              <Button className="text-base justify-start" variant="ghost">
                {t("buttons.projects")}
              </Button>
              <Button className="text-base justify-start" variant="ghost">
                {t("buttons.education")}
              </Button>
              <Button className="text-base justify-start" variant="ghost">
                {t("buttons.contact")}
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
