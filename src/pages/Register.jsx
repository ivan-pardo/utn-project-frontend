import { Layout } from "../components/Layout";

const Register = () => {
  return (
    <Layout>
      <h1>Hola desde Register</h1>

      <section>
        <h2>Hola, Bienvenido</h2>
        <form>
          <div>
            <label>Username:</label>
            <input type="text" name="nombre" />
          </div>

          <div>
            <label>Email:</label>
            <input type="email" name="email" />
          </div>

          <div>
            <label>Contraseña:</label>
            <input type="password" name="password" />
          </div>

          <button>Ingresar</button>
        </form>
      </section>
    </Layout>
  );
};

export { Register };
