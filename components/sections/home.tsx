import profilePhoto from "@/public/profile.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import CallToAction from "../call-to-action";
import { SocialMedia } from "../social-media";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div className="flex flex-col items-center gap-6 pt-6 ">
      <div className="flex flex-col gap-6">
        <div className=" aspect-square rounded-full overflow-hidden ">
          <Image priority src={profilePhoto} alt="Profile Photo" />
        </div>
        <div className="flex items-center justify-center">
          <SocialMedia />
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-evenly">
        <div className="text-4xl font-bold">
          <h1>{t("greeting")}</h1>
          <h1>{t("name")}</h1>
        </div>
        <h2 className="text-xl font-bold">{t("job-title")}</h2>
        <p className="font-light text-justify">{t("description")}</p>
        <p className="font-light text-justify">{t("second-description")}</p>
        <CallToAction />
      </div>
    </div>
  );
}