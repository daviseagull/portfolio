"use client";

import { RadioButtonTypeEnum } from "@/lib/enums";
import { GlobeIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

type RadioButtonDropdownProp = {
  type: RadioButtonTypeEnum;
  values: { label: string; key: string }[];
};

export default function RadioButtonDropdown({
  type,
  values,
}: RadioButtonDropdownProp) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const onChange =
    type === RadioButtonTypeEnum.LANGUAGE
      ? (key: string) => {
          router.replace(`/${key}`);
        }
      : (key: string) => setTheme(key);

  const themeIcon = theme === "dark" ? <MoonIcon /> : <SunIcon />;

  const trigger =
    type === RadioButtonTypeEnum.LANGUAGE ? (
      <div className="px-3">
        <GlobeIcon />
      </div>
    ) : (
      <div className="px-3">{themeIcon}</div>
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup onValueChange={onChange}>
          {values.map((value) => (
            <DropdownMenuRadioItem key={value.key} value={value.key}>
              {value.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
