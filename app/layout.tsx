import type { Metadata } from "next";
import "./globals.css";
import { CookieBanner } from "./CookieBanner";
import { FloatingWhatsApp, Footer, Header } from "./components";
import { assets, business } from "./data";

export const metadata: Metadata = {
  title: "CYE ASESORES",
  description: "Tu gestoria de confianza en Mostoles.",
  icons: {
    icon: assets.favicon,
    apple: assets.favicon
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <a className="skip-link" href="#content">
          Ir al contenido
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CYE Asesores",
              url: "https://cye-asesores.com/",
              logo: assets.logo,
              address: business.addressLines.join(", "),
              telephone: [business.phone, business.whatsapp],
              email: business.emails
            })
          }}
        />
      </body>
    </html>
  );
}
