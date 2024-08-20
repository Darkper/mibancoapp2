# Mibancoapp2

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 18.2.0.
Es una aplicación que gestiona operaciones bancarias básicas, como la
administración de clientes, cuentas y transacciones.
Para su correcto funcionamiento recuerde tener corriendo la aplicación del backend en el puerto 8081 

## Requisitos

Antes de comenzar con la aplicación, asegúrate de tener instalados los siguientes programas:

- **Node.js 18 o superior**: Node.js es necesario para ejecutar el entorno de desarrollo de Angular y gestionar las dependencias. Puedes descargarlo desde [Node.js](https://nodejs.org/).

- **Angular CLI**: La herramienta de línea de comandos de Angular es esencial para crear y gestionar proyectos Angular. Puedes instalarla globalmente usando npm:

```bash
  npm install -g @angular/cli
```

## Configuración

1. **Clonar el repositorio**:

```bash
git clone https://github.com/Darkper/mibancoapp2.git
cd mibancoapp2
```

## Instalar dependencias

Una vez que hayas clonado el repositorio y configurado el entorno, necesitas instalar las dependencias del proyecto. Para hacerlo, sigue estos pasos:


Ejecuta el siguiente comando para instalar todas las dependencias necesarias definidas en el archivo package.json:
```bash
npm install
```
Este comando descargará e instalará todos los paquetes necesarios para el proyecto, incluidos Angular y cualquier otra biblioteca que se utilice en el desarrollo.

Nota: Si estás usando una versión específica de Node.js, asegúrate de que sea compatible con las dependencias del proyecto para evitar posibles problemas.

## Servidor de desarrollo

Ejecuta `ng serve` para iniciar un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Estructuración del código

Ejecuta `ng generate component nombre-del-componente` para generar un nuevo componente. También puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construcción

Ejecuta `ng build` para construir el proyecto. Los archivos generados se almacenarán en el directorio `dist/`.

## Ejecución de pruebas unitarias

Ejecuta `ng test` para ejecutar las pruebas unitarias mediante [Karma](https://karma-runner.github.io).

## Ejecución de pruebas de extremo a extremo

Ejecuta `ng e2e` para ejecutar las pruebas de extremo a extremo mediante una plataforma de tu elección. Para usar este comando, primero necesitas agregar un paquete que implemente capacidades de pruebas de extremo a extremo.

## Ayuda adicional

Para obtener más ayuda sobre Angular CLI usa `ng help` o consulta la página de [Descripción general y referencia de comandos de Angular CLI](https://angular.dev/tools/cli).
