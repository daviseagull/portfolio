"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DownloadIcon, SendIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import useDownloader from "react-use-downloader";

export default function CallToAction() {
  const t = useTranslations("Home");
  const { download } = useDownloader();

  const fileUrl = "DaviSeagullResume.pdf";
  const filename = "DaviSeagullResume.pdf";

  return (
    <div className="flex gap-6 justify-center lg:justify-start">
      <Link href="mailto: davi.seagull@gmail.com" target="_blank">
        <Button variant="outline" className="cursor-pointer">
          <SendIcon className="h-4 cursor-pointer" />
          <Label className="cursor-pointer">{t("buttons.contact-me")}</Label>
        </Button>
      </Link>

      <Button
        variant="outline"
        className="cursor-pointer"
        onClick={() => download(fileUrl, filename)}
      >
        <DownloadIcon className="h-4 cursor-pointer" />
        <Label className="cursor-pointer">{t("buttons.download-cv")}</Label>
      </Button>
    </div>
  );
}
