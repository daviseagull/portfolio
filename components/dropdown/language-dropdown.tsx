"use client";

import RadioButtonDropdown from "@/components/ui/radiobutton-dropdown";
import { RadioButtonTypeEnum } from "@/lib/enums";
import { useTranslations } from "next-intl";

export default function LanguageDropdown() {
  const t = useTranslations("LanguageDropdown");
  const values = ["pt-br", "en"] as const;

  const options = values.map((value) => ({
    label: t(`${value}.label`),
    key: t(`${value}.key`),
  }));
  return (
    <>
      <RadioButtonDropdown
        type={RadioButtonTypeEnum.LANGUAGE}
        values={options}
      ></RadioButtonDropdown>
    </>
  );
}
