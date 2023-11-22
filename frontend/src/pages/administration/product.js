import React, { useState } from 'react';
import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";

const registerProduct = () => {
    return (
        <LayoutFour title="ADMINISTRACIÓN" className="-style-1">
            <Breadcrumb title="ADMINISTRACIÓN">
                <BreadcrumbItem name="ADMINISTRACION" />
                <BreadcrumbItem name="REGISTRO DE PRODUCTOS" current />
            </Breadcrumb>

            <div class="container mt-5">
                <h2 class="animate__animated animate__fadeIn">Formulario de Productos</h2>
                <form class="animate__animated animate__fadeInUp">
                    <div class="form-group">
                        <label for="productName">Nombre del Producto</label>
                        <input type="text" class="form-control golden-input" id="productName" placeholder="Ingrese el nombre del producto"/>
                    </div>
                    <div class="form-group">
                        <label for="productPrice">Precio</label>
                        <input type="number" class="form-control golden-input" id="productPrice" placeholder="Ingrese el precio"/>
                    </div>
                    <div class="form-group">
                        <label for="productBrand">Marca</label>
                        <select class="form-control golden-select" id="productBrand">
                            <option selected>Seleccione una marca</option>
                            <option value="marca1">Marca 1</option>
                            <option value="marca2">Marca 2</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="productImage">Imagen del Producto</label>
                        <input type="file" class="form-control-file" id="productImage"/>
                    </div>

                    <button type="submit" class="btn golden-button animate__animated animate__fadeIn">Enviar</button>
                </form>
            </div>
        </LayoutFour>
    );
};

export default registerProduct;