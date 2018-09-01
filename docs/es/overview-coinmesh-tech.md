# Descripción general de CoinMesh

CoinMesh es una plataforma de aplicaciones de n niveles que provee una arquitectura para que los desarrolladores elaboren aplicaciones flexibles y reusables. De ahora en adelante, hemos conceptualizado nuestra aplicación en cuatro capas.

## Las cuatro capas de nuestra aplicación.

La aplicación puede ser dividida en cuatro capas:
+ Aplicación para el cliente. (Client Application)
+ Servicio lógico. (Logic Service)
+ Adaptador. (Adapter)
+ Fuente de datos. (Data Source)

Empecemos con la última capa y avancemos de allí en adelante.
 
### Fuentes de datos.

Las fuentes de datos se refieren al nodo blockchain, tu proyecto necesita referenciar si quieres desarrollar sobre Litecoin o Bitcoin. Planeamos incluir diversas implementaciones de nodos como lnd, litecoind, bitcoind, btcd, or ltcd. No estamos limitados a estos nodos específicos.

### Adaptador.

El siguiente es el adaptador. Esta capa provee una interfaz para conectarte con la fuente de datos. Se asume que toda la funcionalidad provista por los nodos estará disponible en un contrato unificado vía los adaptadores, con un error explícito si un nodo no puede aceptar un método dado.

## Servicio lógico.

El servicio lógico es la parte media de las capas de la aplicación y donde los desarrolladores empiezan a colocar las bases de sus proyectos. Esta es la capa donde la Aplicación del Cliente interactúa con ésta para obtener información de la Fuente de Datos vía los Adaptadores.
 
### Aplicación para el cliente.

La aplicación para el cliente es la interfaz visual con la cual el usuario va a interactuar. Es una librería simple con estilos básicos que será provista para que el usuario final vea como interactuar con la capa “Logic” (Lógica). De ahora en adelante, esto será completamente basado en un navegador. Sin embargo, hay opciones para fácilmente hacer esta aplicación nativa y la sugerencia para hacerla así será agregada.

## Gestión de paquetes y estructura del proyecto

Todos los paquetes están escritos en JavaScript y gestionados usando unos conceptos simples.

- Todo está disponible como paquetes NPM en la organización @CoinMesh en NPM.
- Todas las dependencias son gestionadas por NPM.
- Toda la configuración es en el archivo package.json en una división coinmesh.
- Todos los comandos deben ser secuencias NPM en el archivo package.json

## Entorno de Desarrollo Integrado (IDE) de CoinMesh

La interfaz gráfica de CoinMesh está pensada para hacer el inicio de los nuevos desarrolladores fácil. Automatiza las tareas para los desarrolladores no deban aprender la tecnología tras bambalinas como el paso uno. No es requerido para ejecutar ninguna de las librerías.
Si no deseas ejecutar el IDE de CoinMesh y simplemente quieres desarrollar usando las librerías es perfectamente posible.
