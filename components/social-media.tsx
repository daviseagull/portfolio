"use client";

import Image from "next/image";

import githubWhiteIcon from "@/public/social-media/github-white.svg";
import githubDarkIcon from "@/public/social-media/github.svg";
import linkedinIcon from "@/public/social-media/linkedin.png";
import { useTheme } from "next-themes";
import Link from "next/link";

export function SocialMedia() {
  const { theme } = useTheme();

  const openUrl = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const githubIcon =
    theme === "dark" ? (
      <Image
        src={githubWhiteIcon}
        width={24}
        height={24}
        alt="Picture of the author"
      />
    ) : (
      <Image
        src={githubDarkIcon}
        width={24}
        height={24}
        alt="Picture of the author"
      />
    );

  return (
    <div className="flex gap-6 justify-center items-center">
      <Link target="_blank" href="https://github.com/daviseagull">
        {githubIcon}
      </Link>

      <Link target="_blank" href="https://www.linkedin.com/in/daviseagull/">
        <Image src={linkedinIcon} width={32} height={32} alt="Linkedin URL" />
      </Link>
    </div>
  );
}
