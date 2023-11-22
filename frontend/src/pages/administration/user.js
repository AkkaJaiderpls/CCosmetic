import React, { useState } from 'react';
import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";

const registerUser = () => {
    return (
        <LayoutFour title="INICIO" className="-style-1">
            <Breadcrumb title="ADMINISTRACIÓN">
                <BreadcrumbItem name="ADMINISTRACION" />
                <BreadcrumbItem name="REGISTRO DE USUARIOS" current />
            </Breadcrumb>

            <div class="container mt-5">
        <h2 class="animate__animated animate__fadeIn">Formulario de Productos</h2>
        <form class="animate__animated animate__fadeInUp">
            <div class="form-group">
                <label for="productName">Nombre de Usuario</label>
                <input type="text" class="form-control golden-input" id="productName" placeholder="Ingrese el Nombre de Usuario"/>
            </div>
            <div class="form-group">
                <label for="productPrice">Contraseña</label>
                <input type="text" class="form-control golden-input" id="productPrice" placeholder="Ingrese el Contraseña"/>
            </div>
            <div class="form-group">
                <label for="productPrice">Email</label>
                <input type="text" class="form-control golden-input" id="productPrice" placeholder="Ingrese el Email"/>
            </div>
        
            <button type="submit" class="btn golden-button animate__animated animate__fadeIn">Enviar</button>
        </form>
    </div>
        </LayoutFour>
    );
};

export default registerUser;