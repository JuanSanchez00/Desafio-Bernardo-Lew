import styles from './producto.module.css';

export default function Producto(props) {
    let nombre = props.nombre;
    let precio = props.precio;

    return (
        <div className={styles.contenedor}>  
            <img src="/img/producto.png" alt="Producto"></img>
            <p className={styles.nombre}>{nombre}</p>
            <p className={styles.precio}>${precio}</p>
        </div>
  );
}