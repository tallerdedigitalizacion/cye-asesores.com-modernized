import Image from "next/image";
import Link from "next/link";
import { SectionIntro } from "../components";
import { assets, values } from "../data";

export const metadata = {
  title: "Sobre nosotros - CYE ASESORES",
  description: "Conoce al equipo y la historia de CYE ASESORES."
};

export default function SobreNosotrosPage() {
  return (
    <>
      <section className="page-hero image-backed">
        <Image src={assets.office} alt="" width={1600} height={1067} priority />
        <div>
          <span className="eyebrow">Sobre nosotros</span>
          <h1>Conoce a nuestro equipo y nuestra historia.</h1>
          <p>
            Contamos con un equipo altamente capacitado en diversas areas de asesoria. Cada uno de nuestros
            profesionales trabaja con un unico objetivo: brindarte soluciones claras, efectivas y personalizadas.
          </p>
        </div>
      </section>

      <section className="split-section">
        <SectionIntro
          eyebrow="Nuestra historia"
          title="Mas de 20 anos de experiencia a tu servicio"
          text="Fundada en 2001, nuestra empresa comenzo con el objetivo de proporcionar soluciones eficaces y personalizadas en las areas fiscal, laboral, contable y juridica."
        />
        <p className="rich-text">
          A lo largo de los anos, hemos crecido y evolucionado, y en 2011 renovamos nuestras instalaciones y servicios
          para mejorar la experiencia de nuestros clientes, siempre manteniendo la cercania y el compromiso como pilares
          fundamentales de nuestra identidad.
        </p>
      </section>

      <section className="band split-section">
        <div>
          <span className="eyebrow">Lo que nos diferencia</span>
          <h2>Desde 2001 ofreciendo un trato personalizado y comprometido con cada cliente.</h2>
        </div>
        <p className="rich-text">
          Lo que nos distingue es nuestra capacidad de ofrecer un trato unico y cercano. Somos una empresa familiar que
          se enfoca en entender las necesidades de cada cliente para brindarles un servicio adaptado a sus circunstancias
          especificas. Nuestro enfoque personalizado, respaldado por mas de dos decadas de experiencia, nos permite estar
          a la vanguardia de las necesidades de particulares, Pymes y empresas.
        </p>
      </section>

      <section className="values-section">
        <SectionIntro
          eyebrow="Nuestros valores"
          title="Compromiso, proximidad, confianza y excelencia"
          text="Cada dia trabajamos para seguir construyendo relaciones duraderas y ofrecer un servicio de calidad que responda a las expectativas de nuestros clientes."
        />
        <div className="value-grid">
          {values.map((value) => (
            <article key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
        <div className="center-action">
          <Link className="button primary" href="/contacto/">
            Contacto
          </Link>
        </div>
      </section>
    </>
  );
}
