# Micro-frontends con Web Components

Ejemplo de Micro-frontends con Web Components, se desactivo el Shadow DOM para compartir el mismo framework CSS y facilitar la comunicación con el DOM, entiéndase que para un proyecto con cierto grado de complejidad no se recomienda desactivarlo, además deberás elaborar una capa de comunicación y navegación.


## Build and serve Micro Frontend Base

```sh
cd base-front-vanilla
npm i
npm start
```
[http://localhost:5000](http://localhost:5000)

## Build and serve Micro Frontend Angular

```sh
cd micro-front-angular
npm i
npm start
```
[http://localhost:5001/main.js](http://localhost:5001/main.js)

```html
<ng-el></ng-el>
```

## Build and serve Micro Frontend React

```sh
cd micro-front-react
npm i
npm start
```
[http://localhost:5002](http://localhost:5002)


```html
<react-el></react-el>
```
