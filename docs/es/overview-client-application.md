# Características de la aplicación para el cliente

La aplicación para el cliente es lo que finalmente se accede desde el navegador. Puede ser escrita de una manera tradicional en la cual la aplicación se comunique con una base de datos central en adición al nodo o también puede funcionar como una aplicación descentralizada que solo use el blockchain de litecoin y bitcoin como un ¨ledger¨ descentralizado.

La aplicación de muestra que es generada contiene un directorio src con los archivos que necesitan ser editados. Estos son compilados en el directorio dist. La aplicación contiene los siguientes directorios (Esta estructura no es obligatoria, así que puede realizar los cambios que desee):

## Components (componentes)

Los componentes reusables que puedes usar en tu aplicación pueden ser incluidos en esta carpeta. Un ejemplo puede ser un componente para mostrar el balance del wallet o monedero.

## Services (Servicios)

Los servicios interactúan con los servicios lógicos. Puedes usar esto para simplificar las llamadas a la API.

## Models (Modelos)

Puedes usar los modelos para agregar para agregar la funcionalidad a varios objetos en una aplicación. Por ejemplo, si tienes un modelo wallet en vez de tener el mismo código dentro de tu aplicación para agregar una nueva dirección tu podrías agregarlo al modelo y referenciar ese código en el modelo.

## Routes (Rutas)

Las rutas que actualmente sirven la página web cuando la URL cambia. Las rutas deberían reusar los componentes del directorio Components para generar las interfaces de usuario.
