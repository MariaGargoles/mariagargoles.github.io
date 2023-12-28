document.addEventListener('DOMContentLoaded', function () {
    const esp = document.getElementById("flag_es");

esp.addEventListener('click', (e) => {
    //console.log("Selecciono ESP");
    changeLanguage(e.target.parentElement.dataset.language);
});

const en = document.getElementById("flag_en");

en.addEventListener('click', (e) => {
    //console.log("Selecciono EN");
    changeLanguage(e.target.parentElement.dataset.language);
});


const textToChange = document.querySelectorAll("[data-section]");

// Iterar sobre cada elemento en el NodeList
textToChange.forEach((textElement, index) => {
  // Obtener el texto de cada elemento y hacer algo con él
  const textValue = textElement.innerText;
  //console.log(`Texto del elemento ${index + 1}: ${textValue}`);
});



const changeLanguage = async (language) => {
    const requestJson = await fetch(`./idiomas/${language}.json?v=sdf`);
    const texts = await requestJson.json();

    const cambiotitulo = document.getElementById("titulo");
    cambiotitulo.textContent = texts.perfil.titulo;

    const cambioentrada = document.getElementById("entrada");
    cambioentrada.textContent = texts.perfil.entrada;


    const cambioparrafo = document.getElementById("cuerpo");
    cambioparrafo.textContent = texts.perfil.cuerpo;


}
  }, false);

