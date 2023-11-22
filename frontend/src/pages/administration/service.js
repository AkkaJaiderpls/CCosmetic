import React, { useState } from 'react';
import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";

const registerCategory = () => {
    return (
        <LayoutFour title="INICIO" className="-style-1">
            <Breadcrumb title="ADMINISTRACIÓN">
                <BreadcrumbItem name="ADMINISTRACION" />
                <BreadcrumbItem name="REGISTRO DE SERVICIOS" current />
            </Breadcrumb>

            <div class="container mt-5">
        <h2 class="animate__animated animate__fadeIn">Formulario de Productos</h2>
        <form class="animate__animated animate__fadeInUp">
            <div class="form-group">
                <label for="productName">Nombre del Servicio</label>
                <input type="text" class="form-control golden-input" id="productName" placeholder="Ingrese el nombre del producto"/>
            </div>
            <div class="form-group">
                <label for="productPrice">videoSrc</label>
                <input type="text" class="form-control golden-input" id="productPrice" placeholder="Ingrese el precio"/>
            </div>
            <div class="form-group">
                <label for="productPrice">Descripcion</label>
                <input type="text" class="form-control golden-input" id="productPrice" placeholder="Ingrese el precio"/>
            </div>
            <div>
                <label for="formFileLg" class="form-label">Imagen del Producto 300x300</label>
                <input class="form-control form-control-lg form-control golden-input" id="formFileLg" type="file"/>
            </div>

            <div>
                <label for="formFileLg" class="form-label">Imagen del Producto 300x300</label>
                <input class="form-control form-control-lg form-control golden-input" id="formFileLg" type="file"/>
            </div>
            <button type="submit" class="btn golden-button animate__animated animate__fadeIn">Enviar</button>
        </form>
    </div>
        </LayoutFour>
    );
};

export default registerCategory;