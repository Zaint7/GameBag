import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

function RegisterModal({ onClose, onSwitchToLogin }) {
  const [form, setForm] = useState({
    nombres: "", apellidos: "", correo: "",
    tipoDoc: "", numeroDoc: "", password: "",
    confirmPassword: "", departamento: "", ciudad: "",
    telefono: "", direccion: ""
  });
  const [leftExpanded, setLeftExpanded] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="register-box" onClick={(e) => e.stopPropagation()}>

        {/* COLUMNA IZQUIERDA */}
        <div className="register-left">
  <div className="register-left-header" onClick={() => setLeftExpanded(!leftExpanded)}>
    <h2 className="register-left-title">¡Bienvenido a GameBag!</h2>
    <span className="register-left-arrow">{leftExpanded ? "▲" : "▼"}</span>
  </div>

  <div className={`register-collapsible ${leftExpanded ? "expanded" : ""}`}>
    <p className="register-left-subtitle">Configura tu cuenta en minutos y podrás:</p>
    <ul className="register-benefits">
      <li>Paga fácilmente desde casa.</li>
      <li>Disfruta de la mejor cobertura.</li>
      <li>Muchos productos a tu alcance.</li>
      <li>Obtener nuestros beneficios imperdibles.</li>
    </ul>
    <p className="register-left-footer">¡Regístrate y comienza a disfrutar hoy mismo!</p>
  </div>

  <span className="register-switch" onClick={onSwitchToLogin}>
    ¿Ya eres usuario? <strong>Inicia Sesión</strong>
  </span>
</div>

        {/* COLUMNA DERECHA */}
        <div className="register-right">
          <button className="modal-close" onClick={onClose}><IoClose /></button>
          <h2 className="modal-title">Regístrate</h2>

          <input className="modal-input" name="nombres" placeholder="Nombres" onChange={handleChange} />
          <input className="modal-input" name="apellidos" placeholder="Apellidos" onChange={handleChange} />
          <input className="modal-input" name="correo" type="email" placeholder="Correo" onChange={handleChange} />

          <div className="register-row">
            <select className="modal-input register-select" name="tipoDoc" onChange={handleChange}>
              <option value="">Tipo de documento</option>
              <option value="CC">Cédula de ciudadanía</option>
              <option value="TI">Tarjeta de identidad</option>
              <option value="CE">Cédula extranjera</option>
              <option value="PP">Pasaporte</option>
            </select>
            <input className="modal-input" name="numeroDoc" placeholder="Número" onChange={handleChange} />
          </div>

          <input className="modal-input" name="password" type="password" placeholder="Contraseña" onChange={handleChange} />
          <input className="modal-input" name="confirmPassword" type="password" placeholder="Confirmar Contraseña" onChange={handleChange} />

          <p className="register-section-title">Información de dirección</p>

          <div className="register-row">
            <select className="modal-input register-select" name="departamento" onChange={handleChange}>
              <option value="">Departamento</option>
              <option value="ANT">Antioquia</option>
              <option value="CUN">Cundinamarca</option>
              <option value="VAC">Valle del Cauca</option>
              <option value="ATL">Atlántico</option>
            </select>
            <select className="modal-input register-select" name="ciudad" onChange={handleChange}>
              <option value="">Ciudad</option>
              <option value="MED">Medellín</option>
              <option value="BOG">Bogotá</option>
              <option value="CAL">Cali</option>
              <option value="BAR">Barranquilla</option>
            </select>
          </div>

          <div className="register-row">
            <input className="modal-input" name="telefono" placeholder="Teléfono" onChange={handleChange} />
            <input className="modal-input" name="direccion" placeholder="Dirección" onChange={handleChange} />
          </div>

          <div className="register-checks">
            <label className="register-check-label">
              <input type="checkbox" /> No soy un robot
            </label>
          
            <label className="register-check-label">
              <input type="checkbox" /> Aceptar <span className="register-link">términos y condiciones</span>
            </label>
            
            <label className="register-check-label">
              <input type="checkbox" />
                <span>Autorizo el tratamiento de mis datos personales según la <span className="register-link">Política de tratamiento de datos</span> de GameBag.</span>
            </label>

            
          </div>

          <button className="modal-submit">Crear cuenta</button>
        </div>

      </div>
    </div>
  );
}

export default RegisterModal;