import React, { useState } from 'react';
import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";

const registerCategory = () => {
    return (
        <LayoutFour title="ADMINISTRACIÓN" className="-style-1">
            <Breadcrumb title="ADMINISTRACIÓN">
                <BreadcrumbItem name="ADMINISTRACION" />
                <BreadcrumbItem name="REGISTRO DE CATEGORIAS" current />
            </Breadcrumb>

            <div class="container mt-5">
                <h2 class="animate__animated animate__fadeIn">Formulario de Categorias</h2>
                <form class="animate__animated animate__fadeInUp">
                    <div class="form-group">
                        <label for="productName">Nombre de la Categoria</label>
                        <input type="text" class="form-control golden-input" id="productName" placeholder="Ingrese el nombre de la Categoria" />
                    </div>
                    <button type="submit" class="btn golden-button animate__animated animate__fadeIn">Enviar</button>
                </form>
            </div>
        </LayoutFour>
    );
};

export default registerCategory;