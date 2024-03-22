# MongoDB

MongoDB es un sistema de gestión de bases de datos (DBMS) **NoSQL**, **orientado a documentos** y de código abierto. En lugar de almacenar datos en tablas como lo hace una base de datos relacional tradicional, MongoDB almacena estructuras de datos en formato JSON con un esquema dinámico, lo que permite una mayor flexibilidad y escalabilidad.

### Modelo de datos flexible:

MongoDB no requiere un esquema predefinido (esquema libre), lo que permite almacenar datos de diferentes tipos y estructuras dentro de una misma colección, esto puede ser un pro a un contra al tener en cuenta que no se está teniendo un control de los datos que estamos queriendo almacenar, pero si hay una forma 

### Escalabilidad horizontal: 

MongoDB está diseñado para escalar horizontalmente de forma sencilla, distribuyendo los datos a través de múltiples servidores o nodos para manejar grandes volúmenes de datos y cargas de trabajo.

</br>


## Diferencias entre base de datos, colecciones y documentos 

- **Base de datos:** Es el entorno global donde se almacenarán todas las colecciones que requiera nuestro api

- **Colecciones:** son los diferentes esquemas donde estarán alojados los documentos que son similares entre sí, es decir un grupo de documentos que tienen los mismos datos y estructura 

- **Documentos:** son aquellos donde se registran los datos en formato JSON compuestos por clave valor y son referentes a la colección a la que pertenecen 


### Espacio de nombres
```JavaScript
// nombre de la base de datos y de la coleccion 
 DB.COLECCTION

// ejemplo
NOTESAPI.USERS
```


### Formato JSON

cada JSON se identifica por un _id, los valores de _id deben ser todos unicos

```json
{
  "_id": {
    "$oid": "65fbc8e2fe4eca451b041885"
  },
  "name": "Emmanuel",
  "lastName": "Martinez",
  "age": 28
}
```

</br>

## Principales comandos 

### Mostrar bases de datos
muestra todas las bases de datos existentes 

```js
show databases
```
```js
show dbs
```

### Selecciona una base de datos o la crea si no existe

```js
use newdb
```

### Crear nueva colección
para que una nueva base de datos se vea reflejada, es necesario que tenga al menos una colección
al momento de nombrar la colección se suele hacer en plural

```js
db.createCollection('posts')
```

### Muestra todas las colecciones de en la base de datos seleccionada
```js
db.createCollection('posts')
```

### Recupera documentos de una colección específica
```js
db.posts.find()
```
Puedes proporcionar filtros para buscar documentos específicos.
```js
db.posts.find({user:"@manu"})
```


### Inserta un documento en una colección específica.

```js
db.posts.insertOne({
    name:"hola esta es mi primera publicacion",
    user:"@manu",
    likes:[{dayana:1, emily:1}]
})
```

### Inserta varios documentos en una colección específica.

```js
db.<name collection>.insertMany()
```

### Actualiza un documento en una colección específica.

```js
// El primer parametro es el filtro para seleccionar el documento a actualizar
// El segundo parámetro es el objeto de actualización, donde utilizamos el operador "$set" para establecer el nuevo valor del campo
db.posts.updateOne({user:"@juan"},{
  $set:{
    user:"@pedro"
  }
})
```

### Actualiza varios documentos en una colección específica.

```js
db.<name collection>.updateMany()
```

### Elimina un documento de una colección específica.

```js
db.<name collection>.deleteOne()
```

### Elimina varios documentos de una colección específica.

```js
db.<name collection>.deleteMany()
```

### Realiza operaciones de agregación en los datos de una colección, como agrupaciones, contadores, etc.

```js
db.<name collection>.aggregate()
```