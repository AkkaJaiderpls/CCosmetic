import React, { useState } from 'react';
import $ from 'jquery';
import LayoutFour from "../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../components/Other/Breadcrumb";

const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  $('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
  });

  return (
    <LayoutFour title="ADMINISTRACIÓN" className="-style-1">
      <Breadcrumb title="ADMINISTRACIÓN">
        <BreadcrumbItem name="INICIO" />
        <BreadcrumbItem name="ADMINISTRACIÓN" current />
      </Breadcrumb>
      <style>
        {`
          @import url(https://fonts.googleapis.com/css?family=Roboto:300);

          .login-page {
            width: 360px;
            margin: auto;
            padding-bottom: 60px;
          }
          
          .form input {
            font-family: "Roboto", sans-serif;
            outline: 0;
            background: #f2f2f2;
            width: 100%;
            border: 0;
            margin: 0 0 15px;
            padding: 15px;
            box-sizing: border-box;
            font-size: 14px;
          }
          
          .form button {
            font-family: "Roboto", sans-serif;
            text-transform: uppercase;
            outline: 0;
            background: #f26460;
            width: 100%;
            border: 0;
            padding: 15px;
            color: #FFFFFF;
            font-size: 14px;
            -webkit-transition: all 0.3 ease;
            transition: all 0.3 ease;
            cursor: pointer;
          }
          
          .form button:hover,.form button:active,.form button:focus {
            background: #ee3631;
          }
          
          .form .message {
            margin: 15px 0 0;
            color: #b3b3b3;
            font-size: 12px;
          }
          
          .form .message a, .form .message span {
            color: #f26460;
            text-decoration: none;
          }
          
          .form .register-form {
            display: none;
          }
          
          .bold-text {
            font-weight: bold;
          }
        `}
      </style>

      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="NOMBRE DE USUARIO" />
            <input type="password" placeholder="CONTRASEÑA" />
            <button type="submit" className="bold-text">INICIAR SESIÓN</button>
            <p className="message">¿NO REGISTRADO? <span>CREAR UNA CUENTA</span></p>
          </form>
        </div>
      </div>
    </LayoutFour>
  );
};

export default LoginPage;
