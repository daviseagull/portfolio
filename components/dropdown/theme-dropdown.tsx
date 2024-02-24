import RadioButtonDropdown from "@/components/ui/radiobutton-dropdown";
import { RadioButtonTypeEnum } from "@/lib/enums";
import { useTranslations } from "next-intl";

export default function ThemeDropdown() {
  const t = useTranslations("ThemeDropdown");
  const values = ["light", "dark"] as const;

  const options = values.map((value) => ({
    label: t(`${value}.label`),
    key: t(`${value}.key`),
  }));
  return (
    <>
      <RadioButtonDropdown
        type={RadioButtonTypeEnum.THEME}
        values={options}
      ></RadioButtonDropdown>
    </>
  );
}
