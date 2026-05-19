README - INSTRUCCIONES DE EJECUCION

Proyecto:
automation-testing-cypress

Descripcion:
Este proyecto contiene la automatizacion de los dos ejercicios tecnicos de QA automation.

1. automatizacion E2E de un flujo de compra en SauceDemo.
2. automatizacion de pruebas API de Petstore Swagger sobre User.

Requisitos Previos:
- Tener instalado Nodejs.
- Tener instalado npm.
- tener acceso a internet para ejecutar las pruebas.
- Clonar el repositorio del proyecto.

---------------------------------------------------------------------------------------------------
1. Clonar el repositorio
---------------------------------------------------------------------------------------------------

- Abrir la Terminal en la carpeta destino que guardara el proyecto
- Ejecutar el siguiente comando:
git clone git@github.com:Lisan274/automation-testing-cypress.git
- Ingresar en la carpeta del proyecto:
cd automation-testing-cypress

---------------------------------------------------------------------------------------------------
2. Instalar Dependencias
---------------------------------------------------------------------------------------------------

Dentro de la carpeta raiz del proyecto ejecutar:

npm install

Nota: Este comando instalara cypress y las Dependencias necesarias definidas en package.json.

---------------------------------------------------------------------------------------------------
3. Abrir cypress en modo interactivo
---------------------------------------------------------------------------------------------------

Para abrir Cypress visualmente,
ejecutar:

npm run cypress:open

Desde la interfaz de cypress se pueden seleccionar y ejecutar los archivos de prueba:
- saucedemo-compra.cy.js
- petstore-user.cy.js

---------------------------------------------------------------------------------------------------
4. Ejecutar Prueba E2E
---------------------------------------------------------------------------------------------------

para ejecutar solamente la prueba E2E, ejecutar:

npm run test:e2e

---------------------------------------------------------------------------------------------------
5. Ejecutar Prueba APi
---------------------------------------------------------------------------------------------------

para ejecutar solamente la prueba API, ejecutar:

npm run test:api

---------------------------------------------------------------------------------------------------
5. Ejecutar Todas las pruebas
---------------------------------------------------------------------------------------------------

Para ejecutar ambas pruebas, ejecutar:

npm run test:all