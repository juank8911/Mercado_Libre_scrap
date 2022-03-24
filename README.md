# Mercado Libre Scrap!

Desafio tecnico de mercado libre que consiste en "responder a la siguiente pregunta ¿Cuántos productos
tenemos en las 5 primeras páginas de la búsqueda "celular smartphones" en
Mercadolibre de la marca Samsung que están en el Fulfillment (FULL)?
https://listado.mercadolibre.com.ar/celular-smarphones#D[A:celular%20smarphones]"


# Arquitectura Exgonal

La **arquitectura hexagonal** es una **arquitectura** del software en la que se busca es separar el core lógico de la aplicación, dejarlo en el centro totalmente aislado del exterior, del cliente y de otras interacciones 

## Correr Programa Localmente

 1. ejecutar el comando npm install dentro de la carpeta
 2. crear la base de datos **scraping_ml** en MongoDB
 3. en caso de tener configurado otro puerto diferente al  27017 en MongoDb actualizarlo en el archivo connection
 4. ejecutar el comando **npm start** para correr la api.

## END PIONTS

POST

***/scraping*** 

realiza la busqueda en las 5 primeras paginas de mercado libre con lasespecificaciones requeridas en el desafio.*
devuelve un json con la fecha, hora, la cantidad de items encontrados y los items encontrados.

GET
***/scraping*** 

busca la coleccion de las consultas realizadas en la base de datos.
Devuelve un json con las consultas  ye realizadas, 

GET
***/items?id={{idconsulta}}***

**parametros:** query  id de la consulta a buscar en la collecion, 
devuelve un son con el id, fecha, hora cantidad de productos y los productos  que se encontraron.  
