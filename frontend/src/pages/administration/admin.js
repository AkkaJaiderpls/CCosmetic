import React from 'react';
import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import Link from 'next/link';

const Administration = () => {
    return (
        <LayoutFour title="ADMINISTRACIÓN" className="-style-1">
            <Breadcrumb title="ADMINISTRACIÓN">
                <BreadcrumbItem name="ADMINISTRACIÓN" />
                <BreadcrumbItem name="ACTUALIZACIONES Y REGISTROS" current />
            </Breadcrumb>

            <div className="admin-list">
                <style>
                    {`
                        .admin-list {
                            width: 360px;
                            margin: auto;
                            padding: 20px;
                        }

                        .admin-list-item {
                            font-family: "Roboto", sans-serif;
                            background: #f2f2f2;
                            margin: 10px 0;
                            padding: 15px;
                            text-align: center;
                            border: none;
                            font-size: 16px;
                            cursor: pointer;
                            transition: background 0.3s ease;
                        }

                        .admin-list-item:hover {
                            background: #f26460;
                            color: #FFFFFF;
                        }

                        .containerAll {
                            padding-bottom: 70px;
                        }
                    `}
                </style>

                <div className='containerAll'>
                <Link href="/administration/product" passHref>
                    <div className="admin-list-item">ADMINISTRACIÓN DE PRODUCTOS</div>
                </Link>
                <Link href="/administration/category" passHref>
                    <div className="admin-list-item">ADMINISTRACIÓN DE CATEGORÍAS</div>
                </Link>
                <Link href="/administration/user" passHref>
                    <div className="admin-list-item">ADMINISTRACIÓN DE USUARIOS</div>
                </Link>
                <Link href="/administration/services" passHref>
                    <div className="admin-list-item">ADMINISTRACIÓIN DE SERVICIOS</div>
                </Link>
                <Link href="/administration/sales" passHref>
                    <div className="admin-list-item">REPORTE DE VENTAS</div>
                </Link>
                <Link href="/administration/meets" passHref>
                    <div className="admin-list-item">REPORTE DE CITAS</div>
                </Link>
                </div>
            </div>
        </LayoutFour>
    );
};

export default Administration;
