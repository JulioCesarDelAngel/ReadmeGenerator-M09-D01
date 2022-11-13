/**
 * ref de colores :https://gist.github.com/JBlond/2fea43a3049b38287e5e9cefc87b2124
 * @param {e=error w=warning} typeMessage 
 * @param {mensaje a mostrar en la consola} textMessage 
 */
function messageBox(typeMessage, textMessage){
  let msg =``; 
  
  switch (typeMessage){
    case  'e': //Error
      msg = `\x1b[101m${textMessage}\x1b[0m`;
      break;
    case 'w' :
      msg = `\x1b[103m${textMessage}\x1b[0m`;
      break;
    default :
      msg = textMessage;
      break;
  }
  console.log(msg);
}

function validateEntry(dataInput, dataMessage){
  if (dataInput){
    return true;
  }
  else {
    messageBox('e',dataMessage);
    return false;
  }
}

// TODO: Crear una función que devuelva una credencial de licencia según la licencia en la que se basa
// Si no hay licencia, devuelva una cadena vacía
/**
 * Referencia https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
 * @param {licencia seleccionada de una lista} license 
 * @returns string en formato badge
 */
function renderLicenseBadge(license) {
  let badge = '';
  switch (license){
    case 'Apache 2.0':
      badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      break;
    case 'GNU GPL v3':
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;
    case 'MIT':
      badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'Mozilla':
      badge ='![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
      break;
    default:
      badge = '';
      break;
  }
  return badge;
}

// TODO: Crear una función que devuelva el enlace de licencia
// Si no hay licencia, devuelva una cadena vacía
function renderLicenseLink(type,license) {
  let linkLicense = ' ';
  switch (license){
    case 'Apache 2.0':
      linkLicense = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GNU GPL v3':
      linkLicense = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'MIT':
      linkLicense = 'https://opensource.org/licenses/MIT';
      break;
    case 'Mozilla':
      linkLicense ='https://opensource.org/licenses/MPL-2.0';
      break;
    default:
      linkLicense = ' ';
      break;
  }
  return type == 1 ? linkLicense : '- ### '+'Licencia [README](' + linkLicense + ')';  
}

// TODO: Crear una función que devuelva la sección de licencia de README
// Si no hay licencia, devuelva una cadena vacía
function renderLicenseSection(license) {
  let licenseMark = '';
  if(license !== 'Ninguna'){
    licenseMark = `Licencia : ${license}`;
  }
  return licenseMark;
}

// TODO: Crear una función para generar un markdown para README
/**
 * Referencia https://pandao.github.io/editor.md/en.html
 * @param {objeto json de las respuestas de inquirer} data 
 * @returns string del Markdown editor
 */
function generateMarkdown(data) {
  return `# ${data.title}

  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(1, data.license)}

  ## Descripción : 
  ### ${data.description}

  ## Tabla de contenido:
  - ### [Instalación](#Instalación)
  - ### [Uso](#Uso)
  - ### [Contribuyendo](#Contribuyendo)
  - ### [Pruebas](#Pruebas)
  - ### [Preguntas](#Preguntas)
  ${renderLicenseLink(2,data.license)}

  ## Instalación :
  ### ${data.installation}
  
  ## Uso :
  ### ${data.usage}

  ## Contribuyendo :
  ### ${data.contributing}

  ## Pruebas :
  ### ${data.test}

  ## Preguntas :
  ### Dudas, observaciones, mejoras. 
  ### Contactame
  ### GitHub : https://github.com/${data.gitUser}
  ### E-Mail : ${data.emailUser}


`;
}

export {generateMarkdown , 
        renderLicenseBadge,
        messageBox,
        validateEntry}
