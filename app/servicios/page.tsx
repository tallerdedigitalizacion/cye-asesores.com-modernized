import Link from "next/link";
import { SectionIntro } from "../components";
import { services, values } from "../data";

export const metadata = {
  title: "Servicios - CYE ASESORES",
  description:
    "Servicios fiscales, laborales, contables, juridicos y gestiones administrativas de CYE ASESORES."
};

export default function ServiciosPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Servicios</span>
        <h1>Una amplia gama de servicios adaptados a particulares, autonomos, pymes y grandes empresas.</h1>
        <p>
          Con nuestro enfoque personalizado, te ayudamos a resolver todas tus gestiones fiscales, laborales, contables y
          juridicas de manera eficiente y profesional.
        </p>
        <Link className="button primary" href="/contacto/">
          Solicita tu consulta
        </Link>
      </section>

      <section className="split-section">
        <SectionIntro
          eyebrow="Que te ofrecemos"
          title="Soluciones precisas y eficaces"
          text="Una amplia variedad de servicios adaptados tanto a particulares como a empresas. Con nosotros, tendras acceso a un equipo de expertos que te guiaran en cada paso."
        />
        <div className="callout">
          <strong>Solicita tu consulta ahora</strong>
          <p>
            Estamos aqui para ayudarte a encontrar la mejor solucion a tus necesidades, con un servicio a medida y la
            atencion personalizada que mereces.
          </p>
        </div>
      </section>

      <section className="band">
        <SectionIntro
          eyebrow="Nuestros servicios"
          title="Calidad, cercania y servicios alineados con cada necesidad"
          text="Estamos comprometidos con la calidad y la cercania, garantizando que cada servicio este alineado con tus necesidades especificas."
        />
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card detailed" key={service.title}>
              <h2>{service.title}</h2>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>{service.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="values-section">
        <SectionIntro
          eyebrow="Principios solidos"
          title="Compromiso, proximidad, confianza y excelencia"
          text="Nuestros valores son la base de nuestro trabajo diario."
        />
        <div className="value-grid">
          {values.map((value) => (
            <article key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
