import { LegalPage } from "../legal-pages";

export const metadata = {
  title: "Politica de Cookies - CYE ASESORES"
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Politica de Cookies"
      intro="Esta pagina conserva el contenido funcional de privacidad de cookies presente en la web original."
      sections={[
        {
          heading: "Uso de cookies",
          body:
            "Esta web utiliza cookies para que podamos ofrecerte la mejor experiencia de usuario posible. La informacion de las cookies se almacena en tu navegador y realiza funciones tales como reconocerte cuando vuelves a nuestra web."
        },
        {
          heading: "Cookies estrictamente necesarias",
          body:
            "Las cookies estrictamente necesarias tienen que activarse siempre para que podamos guardar tus preferencias de ajustes de cookies."
        },
        {
          heading: "Gestion de preferencias",
          body:
            "El usuario puede aceptar, rechazar o ajustar sus preferencias de cookies desde el banner visible en la web. En esta version estatica se mantiene el aviso visual para la demo."
        }
      ]}
    />
  );
}
