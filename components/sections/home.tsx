import profilePhoto from "@/public/profile.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import CallToAction from "../call-to-action";
import { SocialMedia } from "../social-media";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div
      id="home"
      className="flex flex-col items-center gap-6 pt-6 md:flex-row md:gap-14 md:h-[calc(100vh-64px)]"
    >
      <div className="flex flex-col gap-6">
        <div className="md:h-[350px] aspect-square rounded-full overflow-hidden ">
          <Image priority src={profilePhoto} alt="Profile Photo" />
        </div>
        <div className="flex items-center justify-center">
          <SocialMedia />
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-evenly md:gap-14">
        <div className="text-4xl font-bold md:text-6xl">
          <h1>{t("greeting")}</h1>
          <h1>{t("name")}</h1>
        </div>
        <h2 className="text-xl font-bold md:text-4xl">{t("job-title")}</h2>
        <p className="font-light text-justify md:text-xl">{t("description")}</p>
        <p className="font-light text-justify md:text-xl">
          {t("second-description")}
        </p>
        <CallToAction />
      </div>
    </div>
  );
}
