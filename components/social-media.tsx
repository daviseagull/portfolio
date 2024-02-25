"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import githubWhiteIcon from "@/public/social-media/github-white.svg";
import githubDarkIcon from "@/public/social-media/github.svg";
import linkedinIcon from "@/public/social-media/linkedin.png";
import { useTheme } from "next-themes";

export function SocialMedia() {
  const { theme } = useTheme();

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
    <div className="flex gap-2">
      <Button variant="ghost" className="h-14">
        {githubIcon}
      </Button>
      <Button variant="ghost" className="h-14">
        <Image
          src={linkedinIcon}
          width={32}
          height={32}
          alt="Picture of the author"
        />
      </Button>
    </div>
  );
}
