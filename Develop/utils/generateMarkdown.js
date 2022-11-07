// TODO: Crear una función que devuelva una credencial de licencia según la licencia en la que se pasa
// Si no hay licencia, devuelva una cadena vacía
function renderLicenseBadge(license) {}

// TODO: Crear una función que devuelva el enlace de licencia
// Si no hay licencia, devuelva una cadena vacía
function renderLicenseLink(license) {}

// TODO: Crear una función que devuelva la sección de licencia de README
// Si no hay licencia, devuelva una cadena vacía
function renderLicenseSection(license) {}

// TODO: Crear una función para generar un markdown para README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
