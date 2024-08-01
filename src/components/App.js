import ListaProductos from './ListaProductos';
import productos from '../productos.json';
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.contenedor}>
      <h1 className={styles.titulo}>Lista de productos</h1>
      <ListaProductos productos={productos}/>
    </div>
  );
}

export default App;
