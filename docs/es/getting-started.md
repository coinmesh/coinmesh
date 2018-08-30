# Pasos para empezar

1. [Pre-requisitos](#pre-requisitos)
2. [Dependencias NPM](#dependencias-NPM)
3. [Descargar y ejecutar CoinMesh](#descargar-y-ejecutar-coinmesh)
4. [Crear un nuevo proyecto](#crear-un-nuevo-proyecto)
5. [Montar un proyecto](#montar-un-proyecto)
 
## Pre-requisitos

Debes tener un nodo, NPN y Docker instalado en el entorno en el cual estés trabajando.

- [node @ or > 8.11.4](https://nodejs.org/en/)
- [npm @ or > 5.5.1](https://nodejs.org/en/)
- [Docker](https://www.docker.com/products/docker-desktop)

## Dependencias NPM

Instala gulp and jspm a través de NPM-

```
$ npm install gulp -g
$ npm install jspm -g
```

Esto es para compilar las herramientas en la aplicación cliente actual. Planeamos simplificar este proceso.

## Descarga y ejecuta CoinMesh

Clona el repo de CoinMesh
```
$ git clone https://github.com/coinmesh/coinmesh.git
```

Posteriormente puedes ejecutar la aplicación de manera local con npm start en el directorio raíz. Esto instala todos los paquetes npm y todos los subdirectorios.

Una vez que el proceso haya finalizado, ejecuta localhost:9000 en un navegador para ver la siguiente interfaz.

<img width="1183" alt="screen shot 2018-08-14 at 9 04 16 am" src="https://user-images.githubusercontent.com/32662508/44132086-e11752e2-a00b-11e8-9b60-bc641fa3256b.png">

## Crear un nuevo proyecto

CoinMesh ahora te guiará a través del proceso de configurar el entorno para tus aplicaciones Litecoin y Bitcoin.
```
1.  	Selecciona "Create a new project".
2.  	Crea un directorio nuevo moviendo el cursor hasta el final. Debe aparecer allí, al final de la lista.
3.  	Selecciona el círculo a la izquierda del directorio que acabas de crear, después sube y haz clic en “Select Directory”.
4.  	Selecciona la fuente de datos para tu proyecto.
5.  	Selecciona el servicio lógico para tu proyecto. Actualmente solo está disponible HTTP.
6.  	A continuación, escoge la aplicación cliente para el usuario final. Actualmente solo está disponible un esqueleto Aurelia.
7.  	Dale a tu proyecto un nombre y descripción.
8.  	Finalmente, revisa las opciones que seleccionaste.
9.  	Dale clic en “Create”.
```
 
El navegador se actualizará y veras tu proyecto montado en CoinMesh de manera satisfactoria.

<img width="988" alt="screen shot 2018-08-14 at 10 04 11 pm" src="https://user-images.githubusercontent.com/32662508/44132365-0cfaaf42-a00e-11e8-916f-9e5d8d83114d.png">

De aquí, puedes usar un editor de texto o sublime para desarrollar tu proyecto.

## Montar un proyecto
Una de las grandes opciones de CoinMesh es que los desarrolladores pueden fácilmente compartir aplicaciones entre ellos montándolas en CoinMesh. La mayoría de las librerías BlockFuse se proveerán usando “Docker”.

Usemos nuestro “sample-generated-proyect” (proyecto de muestra), como un ejemplo de cómo montar una aplicación con CoinMesh. Es el bosquejo de una billetera para Litecoin y Bitcoin. 

Asegúrese que Docker esté ejecutándose antes de continuar.

```
$ git clone https://github.com/coinmesh/coinmesh
$ git clone https://github.com/coinmesh/sample-generated-project
$ cd coinmesh
$ npm start
```

Abre localhost:9000 en un navegador para ver la siguiente interfaz gráfica.

<img width="1183" alt="screen shot 2018-08-14 at 9 04 16 am" src="https://user-images.githubusercontent.com/32662508/44132086-e11752e2-a00b-11e8-9b60-bc641fa3256b.png">

A continuación, clickea “Mount an existing Project”.

En la pantalla siguiente, desplácese hacia abajo a “sample-generated-project” y clickea en el nombre del directorio.

<img width="1219" alt="coinmesh directory" src="https://user-images.githubusercontent.com/32662508/44315311-c4cf0d80-a3d7-11e8-9d37-2fd1c0f48fd9.png">

Desde aquí puedes seleccionar el armazón de un monedero (wallet), bien sea “litcoin-app” o “bitcoin-app”, haciendo clic en el círculo de la izquierda. Después desplácese al tope de la página y escoja “Select File”

<img width="1112" alt="screen shot 2018-08-19 at 9 44 05 pm" src="https://user-images.githubusercontent.com/32662508/44320866-77fc2e80-a3f9-11e8-89f5-ea85aecfaf80.png">

El navegador se actualizará y debe ver el proyecto exitosamente montado en CoinMesh. Ahora desplácese hacia abajo y haga clic en “Docker Compose” para compilar y ejecutar la aplicación. Esto tomará unos minutos. Podrás ver actividad en la sección “Output” de la interfaz gráfica de CoinMesh.

<img width="1018" alt="screen shot 2018-08-14 at 10 17 55 pm" src="https://user-images.githubusercontent.com/32662508/44132693-157542de-a010-11e8-8195-e0d03db3831e.png">

Abre localhost:9001 en tu navegador y el monedero (wallet) de Litecoin o Bitcoin aparecerá.

<img width="997" alt="screenshot of wallet app running" src="https://user-images.githubusercontent.com/4238393/44287103-25701600-a231-11e8-91c5-6544a7bf45c5.png">

De aquí en adelante, puedes usar un editor de texto o sublime para ver como el bosquejo del monedero (wallet) fue desarrollado con CoinMesh e incluso llenar el resto del monedero (wallet) por usted mismo.
