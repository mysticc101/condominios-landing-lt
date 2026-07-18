import { SITE } from "@/lib/constants";

export default function LeadForm() {
  return (
    <form
      action={`mailto:${SITE.email}?subject=Visita%20privada%20-%20Reserva%20San%20Isidro`}
      method="post"
      encType="text/plain"
      className="lead-form"
    >
      <div className="lead-form__header">
        <p className="kicker">Visita privada</p>

        <h2>Conozca Altum en persona.</h2>

        <p>
          Comparta sus datos y coordinaremos una visita a la sala de ventas o
          el envío del dossier completo.
        </p>
      </div>

      <div className="lead-form__fields">
        <label>
          <span>Nombre completo</span>

          <input
            name="nombre"
            type="text"
            autoComplete="name"
            required
          />
        </label>

        <label>
          <span>Correo electrónico</span>

          <input
            name="correo"
            type="email"
            autoComplete="email"
            required
          />
        </label>

        <label>
          <span>Teléfono</span>

          <input
            name="telefono"
            type="tel"
            autoComplete="tel"
            required
          />
        </label>

        <label>
          <span>¿Qué desea recibir?</span>

          <select
            name="interes"
            defaultValue="dossier"
          >
            <option value="dossier">Dossier y planos</option>
            <option value="visita">Visita privada</option>
            <option value="asesoria">Hablar con un asesor</option>
          </select>
        </label>
      </div>

      <label className="lead-form__consent">
        <input
          name="autorizacion"
          type="checkbox"
          required
        />

        <span>
          Autorizo que el equipo comercial de Altum San Isidro se comunique
          conmigo respecto al proyecto.
        </span>
      </label>

      <button
        type="submit"
        className="lead-form__submit"
      >
        Solicitar información
      </button>

      <p className="lead-form__note">
        Al enviar, se abrirá su aplicación de correo con la solicitud
        preparada.
      </p>
    </form>
  );
}