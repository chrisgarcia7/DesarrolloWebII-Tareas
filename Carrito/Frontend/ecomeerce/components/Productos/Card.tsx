import { useContextCarrito } from '@/Context/ProviderProducto'
import { Producto } from '@/Modelos/Producto'
import React from 'react'

export default function Card(item: Producto) {

    const {productos, setProductos} = useContextCarrito()

    const productoUsado = productos.length > 0 ? productos : item; 

   
    return (
        <>

            <div className="card" style={{ "width": "18rem" }}>
                <img src={item.imagenProducto} className="card-img-top" alt="..." style={{ height: '40vh' }} />
                <div className="card-body">
                    <h5 className="card-title">{item.NombreProducto}</h5>
                    <p className="card-text">{item.PrecioProducto}</p>

                </div>
            </div>
        </>
    )
}