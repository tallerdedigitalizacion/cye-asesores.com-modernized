import { LegalPage } from "../legal-pages";

export const metadata = {
  title: "Aviso Legal y Politica de Privacidad - CYE ASESORES"
};

export default function PrivacidadPage() {
  return (
    <LegalPage
      title="Aviso Legal y Politica de Privacidad"
      intro="Informacion legal y de privacidad de CYE Asesores, trasladada desde la web original para mantener la referencia del cliente en esta version estatica."
      sections={[
        {
          heading: "Titularidad del sitio web",
          body:
            "El sitio web pertenece a CYE Asesores. Los datos de contacto publicados son Avda. Dos de Mayo, 52 1º D, 28934 Mostoles, telefonos 916 14 96 76 y 615 57 80 29, y correos yarias@cyeasesores.es y epardo@cyeasesores.es."
        },
        {
          heading: "Uso del sitio web",
          body:
            "Los contenidos de esta pagina son de caracter general e informativo sobre las distintas actividades que realiza CYE Asesores, con objeto de que el usuario pueda decidir si tiene interes en algun servicio ofrecido y ponerse en contacto para ampliar informacion."
        },
        {
          heading: "Propiedad intelectual",
          body:
            "Los textos, imagenes, marcas, nombres comerciales y demas signos distintivos incluidos en el sitio web estan protegidos. El acceso o utilizacion del sitio no atribuye al usuario derechos sobre dichos contenidos."
        },
        {
          heading: "Enlaces externos",
          body:
            "En el sitio web pueden existir enlaces a servicios externos no gestionados por CYE Asesores. CYE Asesores no se responsabiliza de la informacion enlazada en dichos servicios ni de su correcto funcionamiento."
        },
        {
          heading: "Proteccion de datos",
          body:
            "La informacion enviada a CYE Asesores sera tratada con confidencialidad y reserva. Los datos facilitados a traves de formularios de contacto se utilizaran para responder a la solicitud realizada por el usuario."
        },
        {
          heading: "Modificaciones",
          body:
            "CYE Asesores podra modificar los terminos y condiciones publicados, total o parcialmente, bastando para ello su publicacion en el sitio web."
        }
      ]}
    />
  );
}
