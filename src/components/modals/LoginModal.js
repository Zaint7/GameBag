import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
function LoginModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

return (
    <div className="modal-overlay" onClick={onClose}>
    <div className="modal-box" onClick={(e) => e.stopPropagation()}>
     <button className="modal-close" onClick={onClose}><IoClose /></button>
        
        
        

        
        <h2 className="modal-title">¡Bienvenido!</h2>
        <p className="modal-subtitle">Gracias por visitar nuestra página</p>

        <input
        type="email"
        className="modal-input"
        placeholder="Ingresa tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

        <input
        type="password"
        className="modal-input"
        placeholder="Ingresa tu contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        <span className="modal-forgot">¿Olvidaste tu contraseña?</span>
        <button className="modal-submit">Ingresar</button>

        <p className="modal-register">¿Todavía no te has unido a nuestra comunidad?{" "}
            <span className="modal-register-link">¡Regístrate aquí!</span>
        </p>
    </div>
    </div>
);
}   

export default LoginModal;
