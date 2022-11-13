// TODO: Incluir los paquetes necesarios para esta aplicación
import inquirer from 'inquirer';
import *  as tool from './utils/generateMarkdown.js';
import fs from 'fs';

const fileReadme = 'fileREADME.md';

// TODO: Crear una serie de preguntas para la entrada de usuario
const questions = [
    {
        type:'input',
        name:'title',
        message:'¿Cual es el titulo del proyecto?',
        validate : dataInput=>{return tool.validateEntry(dataInput,'Capture el nombre del proyecto.')}
    },
    {
        type:'input',
        name:'description',
        message:'Describa brevemente el proyecto:',
        validate: dataInput =>{return tool.validateEntry(dataInput,'Capture la descripción del proyecto.')}
    },
    {
        type:'input',
        name:'installation',
        message:'Describa los pasos de instalacion:',
        validate: dataInput =>{return tool.validateEntry(dataInput,'Capture los pasos de instalación.')}
    },
    {
        type:'input',
        name:'usage',
        message:'Describa el uso del proyecto:',
        validate: dataInput =>{return tool.validateEntry(dataInput,'Describa el uso del proyecto.')}
    },
    {
        type:'list',
        name:'license',
        message:'¿Usa algún tipo de licencia?',
        choices:['Ninguna', 'Apache 2.0', 'GNU GPL v3', 'MIT','Mozilla'],
        validate: dataInput =>{return tool.validateEntry(dataInput,'Seleccione una de las opciones presentadas.')}
    },
    {
        type:'input',
        name:'contributing',
        message:'Describa la guía de contribución:',
        validate:dataInput =>{return tool.validateEntry(dataInput,'Describa la guía de contribución.')}
    },
    {
        type:'input',
        name:'test',
        message:'Describa como probar este proyecto:',
        validate:dataInput =>{return tool.validateEntry(dataInput,'Describa como probar este proyecto.')}
    },
    {
        type:'input',
        name:'gitUser',
        message:'¿Cual es su usuario de GitHub?',
        validate:dataInput =>{return tool.validateEntry(dataInput,'Capture su usuario de GitHub.')}
    },
    {
        type:'input',
        name:'emailUser',
        message:'¿Cual es su correo electrónico de contacto?',
        validate:dataInput =>{return tool.validateEntry(dataInput,'Capture correo electronico de contacto.')}
    }
    
];

// TODO: Crear una función para escribir el archivo README
function createFile(fileName, data) {
    //Eliminar el archivo si existe.
    try{
        fs.unlinkSync(fileName);
    }
    catch (err)
    {}
    
    fs.appendFile(fileName, data, (error) => {
        if (error){
            tool.messageBox('e',error);
        }
        else{
            tool.messageBox('w','Archivo creado con exito.');
        }
    });
    return;
}

// TODO: Crear una función para inicializar la aplicación
function init() {
    inquirer.prompt(questions)
        .then(function (answers){
            //console.log(answers);
            let data = tool.generateMarkdown(answers);

            createFile('nuevoREADME.md', data);

        });

}

// Llamada de función para inicializar la aplicación
init();
