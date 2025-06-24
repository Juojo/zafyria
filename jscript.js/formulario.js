
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Obtener valores
  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const email = document.getElementById('correo').value.trim();
  const confirmEmail = document.getElementById('confirma_email').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const consulta = document.getElementById('consulta').value.trim();
  const mensajeValidacion = document.getElementById('mensaje-validacion');

  // Reset de mensajes
  mensajeValidacion.textContent = '';
  mensajeValidacion.className = '';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validaciones
  if (nombre === '' || apellido === '' || email === '' || confirmEmail === '' || telefono === '' || consulta === '') {
    mensajeValidacion.textContent = 'Por favor completá todos los campos.';
    mensajeValidacion.className = 'alert alert-danger';
    return;
  }

  if (!emailRegex.test(email)) {
    mensajeValidacion.textContent = 'Ingresá un correo electrónico válido.';
    mensajeValidacion.className = 'alert alert-danger';
    return;
  }

  if (email !== confirmEmail) {
    mensajeValidacion.textContent = 'Los correos no coinciden.';
    mensajeValidacion.className = 'alert alert-warning';
    return;
  }

  if (!/^\d+$/.test(telefono)) {
    mensajeValidacion.textContent = 'El teléfono debe contener solo números.';
    mensajeValidacion.className = 'alert alert-danger';
    return;
  }

  if (consulta.length < 5) {
    mensajeValidacion.textContent = 'Escribí una consulta más detallada.';
    mensajeValidacion.className = 'alert alert-warning';
    return;
  }

  // Si todo está bien:
  mensajeValidacion.textContent = 'Formulario enviado correctamente. ¡Gracias por contactarnos!';
  mensajeValidacion.className = 'alert alert-success';

  this.reset();
});

