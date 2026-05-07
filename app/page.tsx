import Image from "next/image";
import Link from "next/link";
import { ContactMini, SectionIntro } from "./components";
import { assets, business, services } from "./data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Tu gestoria de confianza en Mostoles</span>
          <h1>{business.name}</h1>
          <p>{business.description}</p>
          <div className="hero-actions">
            <Link className="button primary" href="/contacto/">
              Solicita tu consulta
            </Link>
            <Link className="button secondary" href="/servicios/">
              Ver servicios
            </Link>
          </div>
        </div>
        <div className="hero-media">
          <Image src={assets.hero} alt="" width={665} height={1000} priority />
          <div className="hero-note">
            <strong>Desde 2001</strong>
            <span>Asesoria fiscal, laboral, contable y juridica.</span>
          </div>
        </div>
      </section>

      <section className="split-section">
        <div className="image-panel">
          <Image src={assets.services} alt="" width={1024} height={804} />
        </div>
        <div>
          <SectionIntro
            eyebrow="Por que elegirnos"
            title="Confianza, profesionalidad, compromiso y proximidad"
            text="Con anos de experiencia en el sector, ofrecemos soluciones personalizadas y un trato cercano para ayudarte a gestionar tus obligaciones fiscales, laborales, contables y juridicas de manera eficiente."
          />
          <p className="rich-text">
            En CYE ASESORES, destacamos por ofrecer un enfoque personalizado y cercano que va mas alla de la simple
            gestion administrativa. Nuestro valor añadido radica en comprender a fondo las necesidades de cada cliente,
            ya sea un particular, una pyme o una gran empresa, y adaptar nuestros servicios a su medida.
          </p>
          <Link className="text-link" href="/contacto/">
            Contactar
          </Link>
        </div>
      </section>

      <section className="band">
        <SectionIntro
          eyebrow="Servicios"
          title="Servicios que ofrecemos en nuestras diferentes areas de asesoria"
          text="En CYE ASESORES, trabajamos con compromiso, adaptandonos a tus necesidades con profesionalidad y dedicacion."
        />
        <div className="service-grid compact">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-number">0{services.indexOf(service) + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.intro}</p>
            </article>
          ))}
        </div>
        <div className="center-action">
          <Link className="button primary" href="/servicios/">
            Ver servicios
          </Link>
        </div>
      </section>

      <section className="timeline-section">
        <SectionIntro
          eyebrow="Nuestra historia"
          title="El inicio de nuestra historia"
          text="Desde el principio, nos enfocamos en construir relaciones de confianza con nuestros clientes, brindando soluciones eficaces tanto para particulares como para empresas."
        />
        <div className="timeline">
          <article>
            <strong>2001</strong>
            <h3>Primeros pasos</h3>
            <p>
              Dimos nuestros primeros pasos con una vision clara: ofrecer un servicio de asesoria integral que combinara
              experiencia tecnica con un trato cercano y personalizado.
            </p>
          </article>
          <article>
            <strong>2011</strong>
            <h3>Una renovacion para crecer</h3>
            <p>
              Marcamos un punto de inflexion con una renovacion total de nuestra asesoria, adaptandonos a los nuevos
              tiempos y ampliando nuestros servicios.
            </p>
          </article>
        </div>
        <Link className="text-link" href="/sobre-nosotros/">
          Mas sobre nosotros
        </Link>
      </section>

      <section className="cta-section">
        <div>
          <span className="eyebrow">Estas listo para comenzar</span>
          <h2>No importa cual sea tu necesidad, estamos aqui para ayudarte.</h2>
          <p>
            Desde una consulta puntual hasta una gestion integral de tu empresa, contacta con nosotros y comenzamos a
            trabajar juntos.
          </p>
        </div>
        <ContactMini />
      </section>
    </>
  );
}
