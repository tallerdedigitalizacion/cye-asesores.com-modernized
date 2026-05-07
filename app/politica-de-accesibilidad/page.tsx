import { LegalPage } from "../legal-pages";

export const metadata = {
  title: "Politica de Accesibilidad - CYE ASESORES"
};

export default function AccesibilidadPage() {
  return (
    <LegalPage
      title="Politica de Accesibilidad"
      intro="Referencia de accesibilidad de la web de CYE Asesores, mantenida como pagina estatica dentro de la modernizacion."
      sections={[
        {
          heading: "Compromiso de accesibilidad",
          body:
            "CYE Asesores mantiene una politica orientada a facilitar el acceso a la informacion publicada en su sitio web y a mejorar la experiencia de navegacion de los usuarios."
        },
        {
          heading: "Navegacion",
          body:
            "La version modernizada incluye enlace de salto al contenido, estructura semantica, contraste cuidado, textos legibles y adaptacion responsive para distintos tamanos de pantalla."
        },
        {
          heading: "Contacto",
          body:
            "Si el usuario detecta dificultades de acceso a algun contenido, puede contactar con CYE Asesores mediante los telefonos y correos publicados en la web."
        }
      ]}
    />
  );
}
