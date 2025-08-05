import { Layout } from "../components/Layout"

const Home = () => {
  return (
    <Layout>
      <section>
        <h1>Bienvenido a Nuestra Tienda</h1>
        <p>Descubrí una seleccion exclusiva de productos para vos. Calidad, confianza y atencion personalizada</p>
      </section>
      <section>
        <h2>¿Por que elegirnos?</h2>
        <ul>
          <li>
            <h3>Envios a todo el pais</h3>
            <p>Recibi tu compra en la puerta de tu casa o donde estes</p>
          </li>
          <li>
            <h3>Pagos seguros</h3>
            <p>Trabajamos con plataformas que garantizan tu seguridad</p>
          </li>
          <li>
            <h3>Atencion personalizada</h3>
            <p>Estamos disponibles para ayudarte en todo momento</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Nuestros productos</h2>
        <p>Elegi entre nuestras categorias mas populares</p>
        {/* {Seccion para carga diferida de productos} */}
        <div>
          <p>Cargando producto...</p>
        </div>
      </section>
    </Layout>
  )
}

export { Home }