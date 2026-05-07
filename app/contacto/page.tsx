import Image from "next/image";
import { ContactMini, DemoForm } from "../components";
import { assets, business } from "../data";

export const metadata = {
  title: "Contacto - CYE ASESORES",
  description: "Contacta con CYE ASESORES en Mostoles."
};

export default function ContactoPage() {
  return (
    <>
      <section className="page-hero image-backed">
        <Image src={assets.contact} alt="" width={1024} height={576} priority />
        <div>
          <span className="eyebrow">Contacto</span>
          <h1>Contacta con nosotros y descubre como podemos simplificar tus gestiones.</h1>
          <p>
            Estamos aqui para ayudarte con tus necesidades fiscales, laborales, contables y juridicas.
          </p>
        </div>
      </section>

      <section className="contact-layout">
        <div>
          <span className="eyebrow">Tienes alguna pregunta</span>
          <h2>Estamos aqui para ayudarte.</h2>
          <p>
            Si necesitas mas informacion sobre nuestros servicios, tienes dudas especificas o quieres agendar una
            consulta, no dudes en escribirnos. Cuentanos como podemos asistirte. Nuestro equipo te respondera lo antes
            posible, porque tu tranquilidad es nuestra prioridad.
          </p>
          <div className="contact-card">
            <h3>Informacion de contacto</h3>
            <p>Prefieres agendar una cita presencial? Contacta con nosotros para recibir asesoramiento personalizado.</p>
            <ContactMini />
          </div>
          <p className="contact-line">
            Telefonos: <a href={`tel:${business.phone.replaceAll(" ", "")}`}>{business.phone}</a> · WhatsApp:{" "}
            <a href={business.whatsappUrl}>{business.whatsapp}</a>
          </p>
        </div>
        <DemoForm />
      </section>
    </>
  );
}
