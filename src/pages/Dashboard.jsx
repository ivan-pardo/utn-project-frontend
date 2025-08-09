import { useState } from "react"
import { Layout } from "../components/Layout"


const Dashboard = () => {
  const [nombre, setNombre] = useState();
  const [precio, setPrecio] = useState();
  const [descripcion, setDescripcion] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      id: crypto.randomUUID(),
      nombre: nombre,
      precio: precio,
      descripcion: descripcion
    }

    const response = await fetch("https://fakestoreapi.com/products", { method: "POST"});

    if(response.ok){
      console.log("Exito al crear product")
    }

    console.log(newProduct)
  }

  return (
    <Layout>
      <h1>Panel de Administracion</h1>
      <section>
        <h2>Cargar nuevo producto</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre del producto:</label>
            <input type="text" name="nombre" onChange={(e) => setNombre(e.target.value)} />
          </div>

          <div>
            <label>Precio:</label>
            <input type="text" name="precio" onChange={(e) => setPrecio(e.target.value) } />
          </div>

          <div>
            <label>Descripcion:</label>
            <textarea name="descripcion" rows="4" onChange={(e) => setDescripcion(e.target.value)} />
          </div>

          <button>Guardar producto</button>
        </form>
      </section>
    </Layout>
  )
}

export { Dashboard }