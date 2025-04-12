<template>
  <!-- Contenedor principal de la aplicación -->
  <nav
    id="navbarExample"
    class="navbar navbar-expand-lg fixed-top navbar-light"
    aria-label="Main navigation"
  >
    <div class="container">
      <a class="navbar-brand logo-text" href="#">Beard & Style</a>
      <button
        class="navbar-toggler p-0 border-0"
        type="button"
        id="navbarSideCollapse"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="navbar-collapse offcanvas-collapse"
        v-show="isNavbarOpen"
        id="navbarsExampleDefault"
      >
        <ul class="navbar-nav ms-auto navbar-nav-scroll">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#header"
              >Inicio</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">Servicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#reserve">Reservar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#details">Nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#features">Preguntas</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown01"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Más Opciones</a
            >
            <ul class="dropdown-menu" aria-labelledby="dropdown01">
              <li><a class="dropdown-item" href="#">Articulos y detalles</a></li>
              <li><div class="dropdown-divider"></div></li>
              <li>
                <a class="dropdown-item" href="#">Terminos y Condiciones</a>
              </li>
              <li><div class="dropdown-divider"></div></li>
              <li>
                <a class="dropdown-item" href="#">Policas de privacidad</a>
              </li>
            </ul>
          </li>
        </ul>
        <span class="nav-item">
          <button class="btn-login" @click="openLoginModal">Acceder</button>
        </span>
      </div>
    </div>
  </nav>

  <!-- Modal de inicio de sesión -->
  <section v-if="showLoginModal" class="login-modal">
    <div class="modal-overlay" @click="closeLoginModal"></div>
    <div class="modal-container">
      <button class="close-btn" @click="closeLoginModal">×</button>
      <h2>Bienvenido</h2>
      <p class="modal-description">Inicia sesión para continuar</p>
      <form>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            placeholder="Correo electrónico"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="Contraseña"
            required
          />
        </div>
        <button type="submit" class="btn-primary">Iniciar Sesión</button>
      </form>
      <div class="divider">o</div>
      <button class="btn-secondary">Continuar con Google</button>
      <button class="btn-secondary">Continuar con Facebook</button>
      <p class="modal-footer">
        ¿No tienes una cuenta?
        <a href="#" @click="openRegisterModal">Regístrate aquí</a>
      </p>
    </div>
  </section>

  <!-- Modal de registro -->
  <section v-if="showRegisterModal" class="login-modal">
    <div class="modal-overlay" @click="closeRegisterModal"></div>
    <div class="modal-container">
      <button class="close-btn" @click="closeRegisterModal">×</button>
      <h2>Regístrate</h2>
      <p class="modal-description">
        Crea una cuenta para disfrutar de nuestros servicios
      </p>
      <form>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Nombre completo"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            placeholder="Correo electrónico"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="Contraseña"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="Confirmar contraseña"
            required
          />
        </div>
        <button type="submit" class="btn-primary">Registrarse</button>
      </form>
    </div>
  </section>

  <!-- Contenido principal "BEARD & STYLE" -->
  <header id="header" class="header">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-xl-5">
          <div class="text-container">
            <h1 class="h1-large">BEARD & STYLE</h1>
            <p class="p-large">
              En Beard & Style, nos dedicamos a brindarte de cuidado y estilo
              excepcionales, adaptados a tus preferencias únicas. ¡Es tu
              momento, vamos a brillar juntos!
            </p>
            <a class="btn-solid-lg" href="#reserve">Reservar cita</a>
          </div>
        </div>
        <div class="col-lg-6 col-xl-7">
          <div class="image-container">
            <img
              class="img-fluid"
              src="assets/images/header-image.png"
              alt="alternative"
            />
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Sección de servicios -->
  <section id="services" class="cards-1 bg-gray">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>Nuestros Servicios</h2>
          <p class="p-large">
            Descubre los servicios que ofrecemos para cuidar tu estilo y
            apariencia.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-icon small-icon">
              <span class="fas fa-cut"></span>
            </div>
            <div class="card-body">
              <h5 class="card-title">Corte de Cabello</h5>
              <p>
                Ofrecemos cortes modernos y clásicos adaptados a tu estilo.
                Nuestros barberos están capacitados para brindarte el mejor
                look.
              </p>
            </div>
          </div>

          <div class="card">
            <div class="card-icon small-icon red">
              <span class="fas fa-beard"></span>
            </div>
            <div class="card-body">
              <h5 class="card-title">Arreglo de Barba</h5>
              <p>
                Desde un perfilado perfecto hasta un afeitado completo, cuidamos
                cada detalle para que tu barba luzca impecable.
              </p>
            </div>
          </div>

          <div class="card">
            <div class="card-icon small-icon green">
              <span class="fas fa-spa"></span>
            </div>
            <div class="card-body">
              <h5 class="card-title">Tratamientos Capilares</h5>
              <p>
                Utilizamos productos de alta calidad para tratamientos capilares
                que fortalecen y revitalizan tu cabello.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección de reserva -->
  <section id="reserve">
    <ReserveBlock />
  </section>

  <!-- Sección de "NUESTRO ENFOQUE" -->
  <section id="details" class="basic-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-xl-7">
          <div class="image-container">
            <img
              class="img-fluid"
              src="assets/images/details-1.png"
              alt="Servicios destacados"
            />
          </div>
        </div>
        <div class="col-lg-6 col-xl-5">
          <div class="text-container">
            <div class="section-title">NUESTRO ENFOQUE</div>
            <h2>Transformamos tu estilo, potenciamos tu confianza</h2>
            <p>
              En <strong>Beard & Style</strong>, creemos que un buen estilo
              puede cambiarlo todo. Nuestro equipo combina experiencia y pasión
              para ofrecerte un servicio personalizado que resalte lo mejor de
              ti.
            </p>
            <p>
              Desde cortes modernos hasta el cuidado de tu barba, estamos aquí
              para ayudarte a lucir y sentirte increíble.
            </p>
            <a class="btn-solid-reg" href="#contact">Contáctanos</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección de "SOBRE NOSOTROS" -->  
  <section class="basic-2">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-xl-5">
          <div class="text-container">
            <div class="section-title">SOBRE NOSOTROS</div>
            <h2>¡10 años transformando estilos!</h2>
            <p>
              En Beard & Style, no solo cortamos cabello, ¡creamos experiencias!
              Nuestro equipo de expertos combina técnica y creatividad para
              resaltar lo mejor de ti.
            </p>
            <a class="btn-outline-reg" href="#">Reserva ya</a>
          </div>
        </div>
        <div class="col-lg-6 col-xl-7">
          <div class="image-container">
            <img
              class="img-fluid"
              src="assets/images/details-2.png"
              alt="alternative"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección de preguntas frecuentes -->
  <section id="features" class="accordion-1">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <h2 class="h2-heading">Preguntas Frecuentes</h2>
          <p class="p-heading">
            Encuentra respuestas a las preguntas más comunes sobre nuestros
            servicios y horarios.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-5">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <div class="accordion-icon">
                <span class="fas fa-clock"></span>
              </div>
              <div class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  ¿Cuáles son los horarios de atención?
                </button>
              </div>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Nuestro horario es de lunes a viernes de 7:00 am a 7:00 pm, y
                  los sábados y domingos de 10:00 am a 5:00 pm.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <div class="accordion-icon blue">
                <span class="fas fa-cut"></span>
              </div>
              <div class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  ¿Qué servicios ofrecen?
                </button>
              </div>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Ofrecemos cortes de cabello, arreglo de barba, y combos de
                  corte + barba. También utilizamos productos de alta calidad
                  para el cuidado personal.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <div class="accordion-icon purple">
                <span class="fas fa-calendar-check"></span>
              </div>
              <div class="accordion-header" id="headingThree">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  ¿Es necesario reservar cita?
                </button>
              </div>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Recomendamos reservar tu cita para garantizar disponibilidad,
                  pero también aceptamos clientes sin cita según la
                  disponibilidad.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <div class="accordion-icon orange">
                <span class="fas fa-map-marker-alt"></span>
              </div>
              <div class="accordion-header" id="headingFour">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  ¿Dónde están ubicados?
                </button>
              </div>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Estamos ubicados en Calle 10 # 43A-00 Int 101, Barrio El
                  Poblado, Medellín, Colombia.
                </div>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>
  </section>

  <!-- Sección de testimonios -->
  <section class="cards-2 bg-gray">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="h2-heading">Testimonios de nuestros clientes</h2>
          <p class="p-large">
            Descubre lo que nuestros clientes dicen sobre su experiencia en
            <strong>Beard & Style</strong>.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="card">            
            <div class="card-body">
              <p class="testimonial-text">
                "Mi barba nunca había lucido tan bien. El servicio es excelente
                y los productos que usan son de alta calidad."
              </p>
              <div class="testimonial-author">Luis Martínez</div>
              <div class="occupation">Cliente satisfecho</div>
            </div>
            <div class="gradient-floor blue-to-purple"></div>
          </div>

          <div class="card">            
            <div class="card-body">
              <p class="testimonial-text">
                "El combo de corte y barba es perfecto. Me encanta cómo cuidan
                cada detalle para que todo quede impecable."
              </p>
              <div class="testimonial-author">Andrés López</div>
              <div class="occupation">Cliente habitual</div>
            </div>
            <div class="gradient-floor purple-to-green"></div>
          </div>

          <div class="card">            
            <div class="card-body">
              <p class="testimonial-text">
                "El ambiente es relajante y el personal es muy amable. Siempre
                salgo de aquí sintiéndome renovado."
              </p>
              <div class="testimonial-author">Juan Pérez</div>
              <div class="occupation">Cliente nuevo</div>
            </div>
            <div class="gradient-floor red-to-blue"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección de "¡Encuentra tu estilo perfecto!" -->
  <section class="basic-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="text-container">
            <h2>¡Encuentra tu estilo perfecto con nosotros!</h2>
            <p class="p-large">
              En <strong>Beard & Style</strong>, nos especializamos en realzar
              tu imagen con cortes modernos, arreglos de barba impecables y un
              servicio excepcional. ¡Déjanos cuidar de tu estilo!
            </p>
            <a class="btn-solid-lg custom-btn" href="#reserve">Reserva tu cita ahora</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección de contacto -->
  <section id="contact" class="form-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="text-container">
            <div class="section-title">CONTÁCTANOS</div>
            <h2>Reserva tu cita o haznos una consulta</h2>
            <p>
              En <strong>Beard & Style</strong>, estamos aquí para ayudarte. Si
              tienes preguntas o deseas reservar una cita, completa el
              formulario y nos pondremos en contacto contigo lo antes posible.
            </p>
            <ul class="list-unstyled li-space-lg">
              <li class="d-flex">
                <i class="fas fa-phone-alt"></i>
                <div class="flex-grow-1">
                  <strong>Teléfono:</strong> +57 300 123 4567
                </div>
              </li>
              <li class="d-flex">
                <i class="fas fa-envelope"></i>
                <div class="flex-grow-1">
                  <strong>Email:</strong> contacto@beardandstyle.com
                </div>
              </li>
              <li class="d-flex">
                <i class="fas fa-map-marker-alt"></i>
                <div class="flex-grow-1">
                  <strong>Dirección:</strong> Calle 10 # 43A-00 Int 101, Barrio
                  El Poblado, Medellín, Colombia
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control-input"
                placeholder="Nombre"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control-input"
                placeholder="Correo Electrónico"
                required
              />
            </div>
            <div class="form-group">
              <textarea
                class="form-control-input"
                placeholder="Mensaje"
                rows="4"
                required
              ></textarea>
            </div>
            <div class="form-group">
              <button type="submit" class="form-control-submit-button">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección de footer -->
  <section class="footer bg-gray">
    <button id="myBtn" @click="scrollToTop">
      <i class="fas fa-arrow-up"></i> <!-- Icono del botón -->
    </button>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h4>
            ¡Síguenos en nuestras redes sociales para más consejos de estilo y
            promociones exclusivas!
          </h4>
          <div class="social-container">
            <span class="fa-stack">
              <a href="#your-link">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-facebook-f fa-stack-1x"></i>
              </a>
            </span>
            <span class="fa-stack">
              <a href="#your-link">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-twitter fa-stack-1x"></i>
              </a>
            </span>
            <span class="fa-stack">
              <a href="#your-link">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-pinterest-p fa-stack-1x"></i>
              </a>
            </span>
            <span class="fa-stack">
              <a href="#your-link">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-instagram fa-stack-1x"></i>
              </a>
            </span>
            <span class="fa-stack">
              <a href="#your-link">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-youtube fa-stack-1x"></i>
              </a>
            </span>
          </div>
          <p class="p-small statement">
            Copyright © <a href="#">Beard & Style</a>. Todos los derechos
            reservados.
          </p>
          <p class="p-small statement">
            Diseñado por
            <a href="https://masukmia.com" target="_blank">LeoniBres</a>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- Gestiona la lógica y el estado del componente -->
<script>
// Importa el componente ReserveBlock para su uso en este componente
import ReserveBlock from "./components/ReserveBlock.vue";

export default {
  // Registro de componentes utilizados en este archivo
  components: {
    ReserveBlock, // Componente para la sección de reserva
  },
  data() {
    return {
      // Estado para controlar la visibilidad del modal de inicio de sesión
      showLoginModal: false,
      // Estado para controlar la visibilidad del modal de registro
      showRegisterModal: false,
      // Estado para controlar si el menú de navegación está abierto o cerrado
      isNavbarOpen: false,
    };
  },
  methods: {
    // Alterna el estado del menú de navegación (abrir/cerrar)
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    // Abre el modal de inicio de sesión y cierra el de registro
    openLoginModal() {
      this.showLoginModal = true;
      this.showRegisterModal = false;
      this.isNavbarOpen = false; // Cierra el menú de navegación si está abierto
    },
    // Cierra el modal de inicio de sesión
    closeLoginModal() {
      this.showLoginModal = false;
    },
    // Abre el modal de registro y cierra el de inicio de sesión
    openRegisterModal() {
      this.showRegisterModal = true;
      this.showLoginModal = false;
    },
    // Cierra el modal de registro
    closeRegisterModal() {
      this.showRegisterModal = false;
    },
    // Desplaza la página hacia el inicio
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Desplazamiento suave
      });
    },
  },
};
</script>

<!-- Estilos CSS para el componente -->
<style>
#app {
  font-family: "Roboto", sans-serif;
  color: #333;
}

/* Botón de login */
.btn-login {
  background-color: #e96e1d; /* Color principal de la página */
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-login:hover {
  background-color: #d85c17; /* Color más oscuro para hover */
}

/* Modal */
.login-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 10px; /* Espaciado adicional para dispositivos pequeños */
  overflow-y: auto; /* Permitir desplazamiento si el contenido es más grande que la pantalla */
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.modal-container {
  position: relative;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  width: 100%; /* Asegurar que el modal ocupe todo el ancho disponible */
  max-width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  box-sizing: border-box; /* Incluir padding en el ancho total */
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #999;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: #e96e1d; /* Color principal */
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #e96e1d; /* Color principal */
}

.modal-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px; /* Aumentar el tamaño de fuente para mejor legibilidad */
}

.btn-primary {
  background-color: #e96e1d; /* Color principal */
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 15px;
  transition: background-color 0.3s ease;
  font-size: 16px; /* Aumentar el tamaño de los botones */
}

.btn-primary:hover {
  background-color: #d85c17; /* Color más oscuro */
}

.btn-secondary {
  background-color: #f5f5f5;
  color: #333;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;
  font-size: 16px; /* Aumentar el tamaño de los botones */
}

.btn-secondary:hover {
  background-color: #e0e0e0;
}

.divider {
  margin: 20px 0;
  font-size: 14px;
  color: #aaa;
  position: relative;
}

.divider::before,
.divider::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 40%;
  height: 1px;
  background: #ddd;
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.modal-footer {
  font-size: 14px;
  color: #666;
}

.modal-footer a {
  color: #e96e1d; /* Color principal */
  text-decoration: none;
}

.modal-footer a:hover {
  text-decoration: underline;
}

/* Ajustes para el menú desplegable en dispositivos pequeños */
.navbar-collapse {
  position: fixed;
  top: 0;
  right: 0;
  height: auto;
  max-height: 70%; /* Reducir la altura máxima al 70% de la pantalla */
  width: 75%;
  max-width: 300px;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  transition: all 0.2s ease-in-out; /* Transición rápida para mejor experiencia */
  z-index: 1050;
  overflow-y: auto;
  border-radius: 0 0 10px 10px;
}

.navbar-collapse.show {
  transform: translateX(0);
}

.login-modal + .navbar-collapse {
  display: none !important; /* Asegurar que el menú desaparezca cuando el modal esté activo */
}

ul {
  list-style: none; /* Eliminar viñetas */
  padding: 0; /* Eliminar el padding por defecto */
  margin: 0; /* Eliminar el margen por defecto */
}

@media (min-width: 768px) {
  .navbar-collapse {
    position: static; /* Restaurar posición para pantallas medianas y grandes */
    transform: none; /* Eliminar la animación de deslizamiento */
    width: auto; /* Restaurar el ancho completo */
    max-height: none; /* Eliminar la restricción de altura */
    box-shadow: none; /* Eliminar la sombra */
    overflow: visible; /* Restaurar el comportamiento de contenido */
    display: flex; /* Asegurar que los elementos se alineen horizontalmente */
    justify-content: flex-end; /* Alinear los elementos al final */
    padding: 0; /* Eliminar el padding adicional */
  }

  .navbar-nav {
    display: flex;
    flex-direction: row; /* Alinear los elementos en fila */
    gap: 10px; /* Espaciado entre los elementos */
  }

  .nav-link {
    padding: 10px 15px; /* Ajustar el espaciado interno */
    font-size: 14px; /* Ajustar el tamaño de fuente */
    text-align: center; /* Centrar el texto */
  }

  .btn-login {
    padding: 10px 20px; /* Ajustar el tamaño del botón */
    font-size: 14px; /* Ajustar el tamaño del texto */
    white-space: nowrap; /* Evitar que el texto se divida */
  }
}

@media (max-width: 767px) {
  .navbar-toggler {
    top: 15px; /* Ajustar la posición del botón */
    right: 15px; /* Ajustar la posición del botón */
  }

  .navbar-collapse {
    width: 85%; /* Ajustar el ancho para dispositivos más pequeños */
    max-width: 230px; /* Limitar el ancho máximo */
    max-height: 65%; /* Reducir la altura máxima al 70% */
    padding: 10px; /* Añadir espaciado interno */
  }
}

/* Estilo del botón con bordes más cuadrados */
.btn-solid-lg {
  background-color: #e96e1d; /* Color principal */
  color: #fff;
  border: none;
  padding: 25px 30px; /* Ajustar el padding */
  border-radius: 8px; /* Bordes más suaves */
  font-size: 17px; /* Ajustar el tamaño de fuente */
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  display: inline-block;
}

.btn-solid-lg:hover {
  background-color: #d85c17; /* Color más oscuro para hover */
  color: #fff; /* Cambiar el texto a blanco */
  transform: scale(1.08); /* Efecto de agrandamiento */
}

/* Estilo del botón con bordes más cuadrados */
.btn-solid-reg {
  background-color: #e96e1d; /* Color principal */
  color: #fff;
  border: none;
  padding: 21px 20px;
  border-radius: 10px; /* Bordes más cuadrados */
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  display: inline-block;
}

.btn-solid-reg:hover {
  background-color: #d85c17; /* Color más oscuro para hover */
  color: #fff; /* Cambiar el texto a blanco */
  transform: scale(1.05); /* Efecto de agrandamiento */
}

/* Estilo del botón con bordes más cuadrados */
.btn-outline-reg {
  background-color: #e96e1d; /* Color principal */
  color: #fff;
  border: none;
  padding: 21px 20px;
  border-radius: 10px; /* Bordes más cuadrados */
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  display: inline-block;
}

.btn-outline-reg:hover {
  background-color: #d85c17; /* Color más oscuro para hover */
  color: #fff; /* Cambiar el texto a blanco */
  transform: scale(1.05); /* Efecto de agrandamiento */
}

/* Ajuste del botón "Enviar" */
.form-control-submit-button {
  background-color: #e96e1d; /* Color principal */
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 8px; /* Bordes más cuadrados */
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  display: inline-block;
}

.form-control-submit-button:hover {
  background-color: #d85c17; /* Color más oscuro para hover */
  transform: scale(1.05); /* Efecto de agrandamiento */
  color: #fff; /* Cambiar el texto a blanco */
}

/* Estilo personalizado para el botón "Reserva tu cita ahora" */
.custom-btn {
  background-color: #d85c17 !important; /* Color verde con !important */
  color: #fff !important; /* Texto en blanco con !important */
  padding: 33px 30px; /* Espaciado interno */
  border-radius: 8px; /* Bordes redondeados */
  font-size: 16px; /* Tamaño de fuente */
  font-weight: bold; /* Texto en negrita */
  text-transform: uppercase; /* Texto en mayúsculas */
  text-align: center; /* Centrar el texto */
  display: inline-block; /* Mostrar como botón */
  cursor: pointer; /* Cambiar el cursor al pasar */
  transition: all 0.3s ease; /* Transición suave */
}

.custom-btn:hover {
  background-color: #d85c17; /* Color más oscuro para hover */
  transform: scale(1.05); /* Efecto de agrandamiento */
  color: #fff; /* Cambiar el texto a blanco */
}

/* Estilo del footer */
.footer {
  background-color: #1d1d1d; /* Fondo oscuro */
  color: #ffffff; /* Texto blanco */
}

.footer h4 {
  color: #ffffff; /* Asegurar que el encabezado sea blanco */
}

.footer a {
  color: #ffffff; /* Enlaces en blanco */
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline; /* Subrayado al pasar el cursor */
}

/* Estilo personalizado para el botón "Volver arriba" */
#myBtn {
  background-color: #28a745; /* Color verde */
  border: none;
  border-radius: 50%; /* Forma circular */
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  transition: all 0.3s ease;
  color: #fff; /* Color del icono */
  font-size: 20px; /* Tamaño del icono */
}

#myBtn:hover {
  background-color: #218838; /* Color verde más oscuro al hacer hover */
  transform: scale(1.1); /* Efecto de agrandamiento */
}
</style>
