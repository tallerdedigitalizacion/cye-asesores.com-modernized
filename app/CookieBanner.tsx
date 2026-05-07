"use client";

import { useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(true);
  const [settings, setSettings] = useState(false);

  if (!visible) return null;

  return (
    <div className="cookie-panel" role="dialog" aria-label="Aviso de cookies">
      <button className="cookie-close" onClick={() => setVisible(false)} aria-label="Cerrar el banner de cookies RGPD">
        ×
      </button>
      {!settings ? (
        <>
          <p>
            Utilizamos cookies para ofrecerte la mejor experiencia en nuestra web. Puedes aprender mas sobre que cookies
            utilizamos o desactivarlas en los ajustes.
          </p>
          <div className="cookie-actions">
            <button onClick={() => setVisible(false)}>Aceptar</button>
            <button onClick={() => setVisible(false)}>Rechazar</button>
            <button className="link-button" onClick={() => setSettings(true)}>
              Ajustes
            </button>
          </div>
        </>
      ) : (
        <>
          <h3>Resumen de privacidad</h3>
          <p>
            Esta web utiliza cookies para que podamos ofrecerte la mejor experiencia de usuario posible. Las cookies
            estrictamente necesarias tienen que activarse siempre para guardar tus preferencias.
          </p>
          <div className="cookie-toggle">
            <span>Cookies estrictamente necesarias</span>
            <strong>Activado</strong>
          </div>
          <div className="cookie-actions">
            <button onClick={() => setVisible(false)}>Guardar cambios</button>
            <button className="link-button" onClick={() => setSettings(false)}>
              Volver
            </button>
          </div>
        </>
      )}
    </div>
  );
}
