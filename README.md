# Novatech test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Author: Ariel Rosales

### Installing and running

- `npm install` / `npm i` to get all the latest dependencies
- `npm start` will start the application server

### Decisión del uso de styled-components

Usar styled-components es una buena opción para un proyecto, ya que nos evitamos el choque de clases o estilos.
Cuando una aplicación crece mucho, incluso si se lleva la estructura de clases de forma muy ordenada, siempre corremos el riesgo de repetir nombres en las clases, o de que una clase aplique estilos a elementos del DOM en otra parte de la aplicación en la que no esperabamos que se apliquen esos estilos.
Esto sucede porque, los estilos, por más que se importen en un solo componente, o que se utilicen a través de precompiladores como SASS, se aplicarán siempre en toda la aplicación.
Tener un generador de nombres de clases como styled-components nos evita estos problemas, y nos da las herramientas necesarias para reemplazar cualquier caso de estilos que hayamos aplicado con otros frameworks de CSS o con CSS puro.

### Decisión del uso de context-api

Tanto con Redux como con context-api podríamos resolver los mismo problemas y manejar un estado global de la aplicación.
En este caso tenemos una aplicación muy pequeña, así que, cualquiera de los dos es una buena solución.
Conceptualmente context-api es un poco más sencillo de entender y de utilizar a comparación de Redux, pero si nos encontramos frente a un proyecto que tendrá mucho crecimiento en tamaño y complejidad, entonces Redux nos brinda muchas posibilidades en cuanto a escalabilidad y al manejo de funciones asincrónicas a través de middlewares, como por ejemplo redux-saga.