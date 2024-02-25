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
      className="flex flex-col items-center gap-6 lg:flex-row lg:gap-16 lg:h-[calc(100vh-64px)]"
    >
      <div className="flex flex-col gap-6">
        <div className="lg:h-[350px] aspect-square rounded-full overflow-hidden  ">
          <Image priority src={profilePhoto} alt="Profile Photo" />
        </div>
        <div className="flex items-center justify-center">
          <SocialMedia />
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-evenly lg:gap-14">
        <div className="text-4xl font-bold lg:text-5xl">
          <h1>{t("greeting")}</h1>
          <h1>{t("name")}</h1>
        </div>
        <h2 className="text-xl font-bold lg:text-3xl">{t("job-title")}</h2>
        <p className="font-light text-justify lg:text-xl">{t("description")}</p>
        <p className="font-light text-justify lg:text-xl">
          {t("second-description")}
        </p>
        <CallToAction />
      </div>
    </div>
  );
}
