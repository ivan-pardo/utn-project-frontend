import { Layout } from "../components/Layout"

const Dashboard = () => {
  return (
    <Layout>
      <h1>Panel de Administracion</h1>
      <section>
        <h2>Cargar nuevo producto</h2>
        <form>
          <div>
            <label>Nombre del producto:</label>
            <input type="text" name="nombre" />
          </div>

          <div>
            <label>Precio:</label>
            <input type="text" name="precio" />
          </div>

          <div>
            <label>Descripcion:</label>
            <textarea name="descripcion" rows="4" />
          </div>

          <button>Guardar producto</button>
        </form>
      </section>
    </Layout>
  )
}

export { Dashboard }