// Objeto para almacenar los votos
let votos = {
    opcion1: 0,
    opcion2: 0,
    opcion3: 0,
  };
  
  // Función para actualizar los resultados
  function actualizarResultados() {
    const totalVotos = votos.opcion1 + votos.opcion2 + votos.opcion3;
  
    // Calcular porcentajes
    const porcentajeOpcion1 = totalVotos === 0 ? 0 : ((votos.opcion1 / totalVotos) * 100).toFixed(2);
    const porcentajeOpcion2 = totalVotos === 0 ? 0 : ((votos.opcion2 / totalVotos) * 100).toFixed(2);
    const porcentajeOpcion3 = totalVotos === 0 ? 0 : ((votos.opcion3 / totalVotos) * 100).toFixed(2);
  
    // Mostrar resultados en el HTML
    const resultadosDisplay = document.getElementById('results-display');
    resultadosDisplay.innerHTML = `
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Resultados" class="results-image">
      <p>Opción 1: ${votos.opcion1} votos (${porcentajeOpcion1}%)</p>
      <p>Opción 2: ${votos.opcion2} votos (${porcentajeOpcion2}%)</p>
      <p>Opción 3: ${votos.opcion3} votos (${porcentajeOpcion3}%)</p>
    `;
  }
  
  // Manejar el envío del formulario
  document.getElementById('voting-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe
  
    // Obtener la opción seleccionada
    const opcionSeleccionada = document.querySelector('input[name="vote"]:checked');
  
    if (opcionSeleccionada) {
      // Incrementar el contador de votos
      votos[opcionSeleccionada.value]++;
      actualizarResultados();
    } else {
      alert('Por favor, selecciona una opción antes de enviar tu voto.');
    }
  });
  
  // Inicializar resultados
  actualizarResultados();