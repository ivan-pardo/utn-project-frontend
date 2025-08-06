import { useState } from "react";
import { Layout } from "../components/Layout";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("Error al introducir datos");
      return;
    }
    setError(""); 

    const newUser = {
      user: username,
      email: email,
      password: password,
    };
    console.log(newUser);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <Layout>
      <h1>Hola desde Register</h1>

      <section>
        <h2>Hola, Bienvenido</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="nombre"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button>Ingresar</button>
        </form>
        {error && <p>{error}</p>}
      </section>
    </Layout>
  );
};

export { Register };
