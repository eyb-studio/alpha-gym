import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/lib/dictionaries";
import { IntroAnimation } from "@/components/IntroAnimation";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Space } from "@/components/sections/Space";
import { Disciplines } from "@/components/sections/Disciplines";
import { Coaches } from "@/components/sections/Coaches";
import { Meals } from "@/components/sections/Meals";
import { Voices } from "@/components/sections/Voices";
import { Membership } from "@/components/sections/Membership";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <IntroAnimation />
      <Nav lang={lang} dict={dict} />
      <main>
        <Hero dict={dict} />
        <Manifesto dict={dict} />
        <Space dict={dict} />
        <Disciplines dict={dict} />
        <Coaches dict={dict} />
        <Meals dict={dict} />
        <Voices dict={dict} />
        <Membership dict={dict} />
        <FinalCTA dict={dict} />
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
