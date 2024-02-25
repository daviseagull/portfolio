import Image from "next/image";

type LogoProps = {
  label: string;
  skill: any;
};

export default function Logo({ label, skill }: LogoProps) {
  return (
    <div className="flex flex-col items-center justify-end gap-2 w-[80px] h-[70px]">
      <Image className="w-5/12" src={skill} alt={label} />
      <p className="text-sm">{label}</p>
    </div>
  );
}
