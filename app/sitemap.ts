import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tallerdedigitalizacion.github.io/cye-asesores.com-modernized";
  const lastModified = new Date("2026-05-07T00:00:00.000Z");
  return [
    "",
    "/sobre-nosotros/",
    "/servicios/",
    "/contacto/",
    "/politica-privacidad/",
    "/politica-de-cookies/",
    "/politica-de-accesibilidad/"
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified
  }));
}
