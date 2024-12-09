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
    <div>
      {/* Navbar */}
      <nav>
        <button onClick={() => scrollToSection("home")}>Inicio</button>
        <button onClick={() => scrollToSection("about")}>Sobre Nosotros</button>
        <button onClick={() => scrollToSection("contact")}>Contacto</button>
      </nav>

      {/* Sections */}
      <section id="home">
        <div>
          <h1>Bienvenido a Nuestra Página 🚀</h1>
          <p>Explora nuestras secciones para conocernos mejor.</p>
          <button onClick={() => scrollToSection("about")}>Saber Más</button>
        </div>
      </section>

      <section id="about">
        <h2>Sobre Nosotros</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam,
          nisi nec facilisis pharetra, lacus justo commodo arcu, at vehicula orci eros
          nec metus.
        </p>
        <p>
          Integer tristique mi id metus placerat, sit amet feugiat nulla volutpat.
          Vestibulum a enim sem. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas.
        </p>
      </section>

      <section id="contact">
        <h2>Contacto</h2>
        <p>¿Tienes alguna pregunta? ¡Escríbenos!</p>
        <form>
          <div>
            <input type="text" placeholder="Tu nombre" />
          </div>
          <div>
            <input type="email" placeholder="Tu correo electrónico" />
          </div>
          <div>
            <textarea placeholder="Tu mensaje" rows="4"></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
};

export default App;
