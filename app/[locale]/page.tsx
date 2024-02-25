import Home from "@/components/home";
import Navbar from "@/components/navbar";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Home");
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}
