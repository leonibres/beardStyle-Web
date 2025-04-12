<template>
  <div class="reserve-block">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <br><br/>
          <h2>¡Transforma tu estilo con nosotros!</h2>
          <p>
            En <strong>Beard & Style</strong>, ofrecemos una experiencia única
            de cuidado personal. Desde cortes modernos hasta el arreglo perfecto
            de tu barba, nuestro equipo de expertos está listo para resaltar tu
            mejor versión.
          </p><br/><br>
          <h4>¿Por qué elegirnos?</h4>
          <ul>
            <li>✔ Barberos profesionales con años de experiencia.</li>
            <li>✔ Ambiente cómodo y relajante.</li>
            <li>
              ✔ Productos de alta calidad para el cuidado de tu cabello y barba.
            </li>
          </ul>
          
        </div>
        <div class="col-lg-6">
          <div class="form-container">
            <h3>Reserva ya</h3>
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Celular"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="date"
                  class="form-control"
                  placeholder="dd/mm/aaaa"
                  required
                />
              </div>
              <div class="form-group">
                <select class="form-control" required>
                  <option value="" disabled selected>
                    Seleccione el servicio
                  </option>
                  <option value="corte">Corte</option>
                  <option value="barba">Barba</option>
                  <option value="combo">Combo Corte + Barba</option>
                </select>
              </div>
              <div class="form-group">
                <select class="form-control" required>
                  <option value="" disabled selected>Seleccione barbero</option>
                  <option value="barbero1">Barbero 1</option>
                  <option value="barbero2">Barbero 2</option>
                  <option value="barbero3">Barbero 3</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary">
                Reservar Cita
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reserve-block {
  padding: 4rem 0;
  background-color: #1d1d1d;
  color: #ffffff;
}

.reserve-block h2 {
  color: #ffffff;
}

.reserve-block h4, h3 {
  color: #e96e1d;
}

.reserve-block ul {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.reserve-block ul li {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
}

.form-container {
  background-color: #2c2c2c;
  padding: 2rem;
  border-radius: 8px;
}

.form-container .form-control {
  margin-bottom: 1rem;
  border-radius: 4px;
}

.form-container .btn-primary {
  background-color: #e96e1d;
  border: none;
  width: 100%;
  padding: 0.75rem;
  font-weight: bold;
}

.form-container .btn-primary:hover {
  background-color: #d85c1a;
}
</style>
