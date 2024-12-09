import { createSignal } from "solid-js";

const App = () => {
  const [currentSection, setCurrentSection] = createSignal("home");

  const scrollToSection = (section: string) => {
    setCurrentSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      {/* Navbar */}
      <nav
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          backgroundColor: "#0078D7",
          padding: "1rem",
          zIndex: "1000",
          color: "#fff",
          textAlign: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <button
          onClick={() => scrollToSection("home")}
          style={{
            margin: "0 1rem",
            padding: "0.5rem 1rem",
            background: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          Inicio
        </button>
        <button
          onClick={() => scrollToSection("about")}
          style={{
            margin: "0 1rem",
            padding: "0.5rem 1rem",
            background: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          Sobre Nosotros
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          style={{
            margin: "0 1rem",
            padding: "0.5rem 1rem",
            background: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          Contacto
        </button>
      </nav>

      {/* Sections */}
      <section
        id="home"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>Bienvenido a Nuestra Página 🚀</h1>
          <p>Explora nuestras secciones para conocernos mejor.</p>
          <button
            onClick={() => scrollToSection("about")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#0078D7",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
              marginTop: "1rem",
            }}
          >
            Saber Más
          </button>
        </div>
      </section>

      <section
        id="about"
        style={{
          height: "100vh",
          padding: "2rem",
          backgroundColor: "#e1e8ed",
          textAlign: "center",
        }}
      >
        <h2>Sobre Nosotros</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          aliquam, nisi nec facilisis pharetra, lacus justo commodo arcu, at
          vehicula orci eros nec metus.
        </p>
        <p>
          Integer tristique mi id metus placerat, sit amet feugiat nulla
          volutpat. Vestibulum a enim sem. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </section>

      <section
        id="contact"
        style={{
          height: "100vh",
          padding: "2rem",
          backgroundColor: "#d1e7dd",
          textAlign: "center",
        }}
      >
        <h2>Contacto</h2>
        <p>¿Tienes alguna pregunta? ¡Escríbenos!</p>
        <form
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "5px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              placeholder="Tu nombre"
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <textarea
              placeholder="Tu mensaje"
              rows="4"
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#0078D7",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
};

export default App;
