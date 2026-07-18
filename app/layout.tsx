import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

const bodoni = Bodoni_Moda({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const viewport: Viewport = { themeColor: "#11110f", colorScheme: "light" };

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  title: { default: "Altum San Isidro | Residencias privadas en Lima", template: "%s | Altum San Isidro" },
  description: "Doce residencias privadas en San Isidro, Lima. Arquitectura serena, escala excepcional y materialidad perdurable.",
  keywords: ["departamentos de lujo en San Isidro", "residencias privadas Lima", "proyecto inmobiliario San Isidro", "Altum San Isidro"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { title: "Altum San Isidro | Residencias privadas en Lima", description: "Doce residencias privadas, concebidas a una escala excepcional.", url: "/", siteName: SITE.name, type: "website", locale: "es_PE", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Altum San Isidro, residencias privadas en Lima" }] },
  twitter: { card: "summary_large_image", title: "Altum San Isidro | Residencias privadas en Lima", description: "Doce residencias privadas, concebidas a una escala excepcional.", images: ["/opengraph-image"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${bodoni.variable} ${manrope.variable} antialiased`}><a href="#contenido" className="sr-only fixed left-4 top-4 z-[100] bg-stone-950 px-4 py-3 text-sm font-medium text-white focus:not-sr-only">Saltar al contenido</a>{children}</body></html>;
}
