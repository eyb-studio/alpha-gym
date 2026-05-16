import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono, Tajawal } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { dir, getDictionary, hasLocale, locales } from "@/lib/dictionaries";
import { GrainOverlay } from "@/components/GrainOverlay";
import { CustomCursor } from "@/components/CustomCursor";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const tajawal = Tajawal({
  weight: ["400", "700", "900"],
  variable: "--font-tajawal",
  subsets: ["arabic"],
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      dir={dir(lang)}
      className={`${anton.variable} ${inter.variable} ${jetbrains.variable} ${tajawal.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-ink text-bone selection:bg-bone selection:text-ink">
        {children}
        <GrainOverlay />
        <CustomCursor />
      </body>
    </html>
  );
}

export const dynamicParams = false;
