# Descripción general de una fuente de datos

Una fuente de datos es simplemente una serie de configuraciones de un nodo que corra una aplicación de implementación Litecoin o Bitcoin
 
## Docker

Cada proyecto está pensado para ser levantado con Docker. La fuente de datos debe incluir un archivo Dockerfile para descargar la aplicación, verificando las firmas, configurando el nodo y haciendo cualquier puerto disponible.

## Archivos de configuración.

El archivo package.json incluye una división coinmesh en el JSON que describe los aspectos de la fuente de datos para que la interfaz gráfica se desarrolle. Esto incluye un archivo confFilePath que contiene los atributos para nombrar los archivos de configuración que son creados así como un archivo conf que contiene los archivos de configuración YAML o JSON que necesitan ser creados. Los valores por defecto serán usados posteriormente para crear un archivo de configuración.

Después que el archivo ha sido creado la interfaz gráfica de CoinMesh será capaz de hacer cosas como cambiar entre modos Mainnet / Testnet / Regtest (o simnet).

## Fuentes de dato

Las primeras cinco fuentes de datos serán:
+ (Litecoind)[https://github.com/litecoin-project/litecoin]
+ (Bitcoind)[https://github.com/bitcoin/bitcoin]
+ (LTCD)[https://github.com/ltcsuite/ltcd]
+ (BTCD)[https://github.com/btcsuite/btcd]
+ (LND)[https://github.com/lightningnetwork/lnd]
