
import React, { useState } from 'react';
import config from '../configs/env';
import { Services } from "../services/service";
import Cookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await Services(
                {
                    username: username,
                    password: password
                },
                config.routes.initial.login
            );

            if (response.status) {
                Cookie.set('username', username); // Guarda el usuario en la cookie
                alert("Login Correcto");
                navigate('/registro'); // Redirige después del login exitoso
            } else {
                alert(response?.message || "Credenciales incorrectas");
            }
        } catch (error) {
            console.error("Error durante el login:", error);
            alert("Error en la conexión al servidor");
        }
    };

    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={login}>
                <div>
                    <label>Usuario:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
};

export default Login;