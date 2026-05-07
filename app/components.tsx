import Image from "next/image";
import Link from "next/link";
import { assets, business, navItems } from "./data";

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="CYE Asesores inicio">
        <Image src={assets.logo} alt="CYE Asesores" width={180} height={96} priority />
      </Link>
      <nav className="main-nav" aria-label="Navegacion principal">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="nav-cta" href="/contacto/">
        Contacto
      </Link>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Image src={assets.logo} alt="CYE Asesores" width={180} height={96} />
          <p>{business.description}</p>
        </div>
        <ContactMini />
      </div>
      <Image className="kit-digital" src={assets.kitDigital} alt="" width={1300} height={121} />
      <div className="footer-bottom">
        <span>© {business.name}. Todos los derechos reservados.</span>
        <div className="legal-links">
          <Link href="/politica-privacidad/">Aviso Legal y Politica de Privacidad</Link>
          <Link href="/politica-de-cookies/">Politica de Cookies</Link>
          <Link href="/politica-de-accesibilidad/">Politica de Accesibilidad</Link>
          <Link href="/sitemap.xml">Mapa del Sitio</Link>
        </div>
      </div>
    </footer>
  );
}

export function ContactMini() {
  return (
    <address className="contact-mini">
      <strong>Direccion</strong>
      <span>{business.addressLines[0]}</span>
      <span>{business.addressLines[1]}</span>
      <strong>Telefonos</strong>
      <a href={`tel:${business.phone.replaceAll(" ", "")}`}>{business.phone}</a>
      <a href={business.whatsappUrl}>{business.whatsapp}</a>
      <strong>Correo</strong>
      {business.emails.map((email) => (
        <a key={email} href={`mailto:${email}`}>
          {email}
        </a>
      ))}
    </address>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  text
}: {
  eyebrow?: string;
  title: string;
  text: string;
}) {
  return (
    <div className="section-intro">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export function DemoForm() {
  return (
    <div className="demo-form-wrap">
      <div className="demo-ribbon">Demo: formulario no habilitado</div>
      <form className="contact-form" aria-disabled="true">
        <label>
          Nombre
          <input disabled type="text" placeholder="Tu nombre" />
        </label>
        <label>
          Email
          <input disabled type="email" placeholder="tu@email.com" />
        </label>
        <label>
          Telefono
          <input disabled type="tel" placeholder="Tu telefono" />
        </label>
        <label>
          Mensaje
          <textarea disabled rows={5} placeholder="Cuentanos como podemos asistirte" />
        </label>
        <button disabled type="button">
          Enviar consulta
        </button>
      </form>
      <div className="form-overlay" aria-hidden="true">
        <strong>Esto es una demo</strong>
        <span>Los formularios no estan habilitados.</span>
      </div>
    </div>
  );
}

export function FloatingWhatsApp() {
  return (
    <a className="floating-whatsapp" href={business.whatsappUrl} aria-label="Contactar por WhatsApp">
      <span>WhatsApp</span>
      <strong>{business.whatsapp}</strong>
    </a>
  );
}
