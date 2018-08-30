# Descripción general de un adaptador

La capa de adaptadores se encuentra entre la fuente de datos y los servicios lógicos. Los adaptadores están diseñados para ser interfaces en cada una de las implementaciones Litecoin o Bitcoin.

El adaptador tiene funcionalidades ya configuradas como enviar monedas a otra dirección, así que hace fácil para el desarrollador, este se puede dedicar a escribir mejoras en ves de trabajar en la interacción con los nodos.

Los adaptadores litecoind and bitcoind usan la interfaz JSON RPC y el adaptador LND usa la interfaz gRPC.

## Como una librería node.js

Cada uno de los adaptadores puede ser instalado usando npm install en un servicio lógico (o incluso otro adaptador si lo quieres) así que los desarrolladores pueden empezar inmediatamente a interactuar con el nodo.

## API RESTful HTTP

El adaptador puede también ejecutarse directamente como un servicio HTTP. Esto habilita al desarrollador a escribir su código en cualquier lenguaje que escoja y aun así interactuar con el nodo de manera sencilla.

## Usando los adaptadores afuera de CoinMesh

Debido a que los adaptadores están desarrollados sobre fuentes de datos es fácil usar esta funcionalidad fuera de aplicaciones CoinMesh.

CoinMesh está diseñado para ser un ecosistema de ayuda reusable para alentar la creación de proyectos basados en ideas, así que nosotros de ninguna manera obligamos al desarrollador a usar varios servicios lógicos y adaptadores solo en CoinMesh.

## Pruebas

Actualmente los adaptadores están siendo probados usando Jasmine and Supertest. Jasmine maneja las unidades de pruebas y Supertest maneja las solicitudes HTTP de manera fácil.
