# Características de un Servicio Lógico

Los servicios lógicos es donde el núcleo del negocio debería residir. Tradicionalmente un servicio lógico debe querer agregar algunas aplicaciones de negocios sobre un adaptador.
Al hacer esto, la aplicación puede seguir actualizada ante cualquier cambio en el código aguas arriba en el adaptador pero aun así, ser capaz de tener la lógica específica para tu aplicación. Esto hace mantenerse actualizado mucho más fácil.

## Usos afuera de CoinMesh

Debido a que los servicios lógicos están desarrollados sobre adaptadores típicamente es fácil usar esta funcionalidad afuera de aplicaciones manejadas por CoinMesh.

CoinMesh está diseñado para ser un ecosistema de ayuda reusable para alentar la creación de proyectos basados en ideas, así que nosotros de ninguna manera obligamos al desarrollador a usar varios servicios lógicos y adaptadores solo en CoinMesh.

## Servicios lógicos reusables

Alentamos la contribución a CoinMesh y la comunidad, desarrollando varios servicios lógicos que pueden ser revisados, probados y usados por todos. Al hacer esto, todos trabajamos juntos para prevenir fallos de seguridad.

## Pruebas

Actualmente los adaptadores están siendo probados usando Jasmine and Supertest. Jasmine maneja las unidades de pruebas y Supertest maneja las solicitudes HTTP de manera fácil.
