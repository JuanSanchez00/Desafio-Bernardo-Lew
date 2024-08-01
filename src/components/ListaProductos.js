import Producto from './Producto';
import styles from './listaProductos.module.css';

export default function ListaProductos(props) {
    let productos = props.productos;

    return (
        <div className={styles.contenedor}>  
            {productos.map((producto) => (
                <div key={producto.id}>
                <Producto 
                    nombre = {producto.nombre}
                    precio = {producto.precio}
                />
                </div>
            ))}
        </div>
  );
}