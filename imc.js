
function calcular(event) {
    event.preventDefault();  // Prevenir que el formulario se envíe y la página se recargue

    let est = parseFloat(document.getElementById("est").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let imc = peso / (Math.pow(est, 2));  // Calcula el IMC
    localStorage.setItem('imc', imc.toFixed(2));
    // Redirige a la página de resultados
    window.location.href = 'imc_res.html'; 
}
