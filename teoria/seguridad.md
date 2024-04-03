# Encriptación

En programación las encriptacion es un proceso mediante el cual se convierte información legible en un formato **ilegible o cifrado**, con el objetivo de protegerla de accesos no autorizados. Se utiliza para garantizar la confidencialidad y seguridad de los datos durante su transmisión o almacenamiento.

Existen diferentes algoritmos y técnicas de encriptación, cada uno con sus propias características y niveles de seguridad. Algunos de los algoritmos de encriptación más comunes incluyen AES (Advanced Encryption Standard), RSA (Rivest-Shamir-Adleman), DES (Data Encryption Standard), y más recientemente, algoritmos de curvas elípticas como ECC (Elliptic Curve Cryptography).

En programación, la encriptación se utiliza en una amplia variedad de aplicaciones, como proteger contraseñas, cifrar comunicaciones en redes, asegurar datos sensibles en bases de datos, entre otros casos de uso.

</br>

hay varios métodos de encriptación que se utilizan en programación y seguridad informática. Algunas de las formas comunes de encriptación incluyen:

- **Encriptación simétrica:** En este tipo de encriptación, la misma clave se utiliza tanto para encriptar como para desencriptar los datos. Algunos algoritmos simétricos populares incluyen AES (Advanced Encryption Standard) y DES (Data Encryption Standard).

- **Encriptación asimétrica:** También conocida como encriptación de clave pública, utiliza un par de claves: una clave pública y una clave privada. La clave pública se comparte libremente, mientras que la clave privada se mantiene secreta. Los datos encriptados con la clave pública solo pueden desencriptarse con la clave privada correspondiente, y viceversa. Los algoritmos de encriptación asimétrica comunes incluyen RSA (Rivest-Shamir-Adleman) y ECC (Elliptic Curve Cryptography).

- **Encriptación de extremo a extremo:** Este tipo de encriptación se utiliza para garantizar que los datos se cifren en el dispositivo del remitente y solo se descifren en el dispositivo del destinatario, sin que el proveedor de servicios tenga acceso a los datos en texto plano. Se utiliza comúnmente en aplicaciones de mensajería segura y comunicaciones en línea.

- **Firma digital:** La firma digital es un tipo de encriptación asimétrica que se utiliza para autenticar la integridad y la autenticidad de un mensaje o un documento. Se utiliza principalmente para garantizar que el remitente de un mensaje sea quien dice ser y para garantizar que el mensaje no haya sido alterado en tránsito.

- **Encriptación de bases de datos:** Muchas bases de datos ofrecen capacidades de encriptación para proteger los datos almacenados. Esto puede incluir encriptación de datos en reposo (almacenados en el disco) y encriptación de datos en tránsito (transmitidos entre la aplicación y la base de datos).

</br>

### Funciones hash

Las funciones hash, también conocidas simplemente como "hash", son funciones matemáticas que transforman una cantidad de datos de entrada (o un "mensaje") en una cadena de longitud fija, generalmente de tamaño mucho más pequeño, llamada "hash". Estas funciones se utilizan en una variedad de aplicaciones en informática, incluida la seguridad, la integridad de datos, la indexación y la búsqueda eficiente.

</br>

# Tokens

Los "tokens de seguridad" en las peticiones al backend son piezas de información utilizadas para autenticar y autorizar las solicitudes que se realizan a un servidor o servicio web. Estos tokens son esenciales para garantizar que solo los usuarios autorizados puedan acceder a los recursos protegidos.

</br>

Aquí hay un resumen de cómo funcionan los tokens de seguridad en las solicitudes al backend:

- **Autenticación:** Cuando un usuario intenta acceder a un recurso protegido en el backend, generalmente debe proporcionar credenciales de autenticación, como un nombre de usuario y una contraseña. Una vez autenticado, el backend emite un token de seguridad al cliente.

- **Token de seguridad:** Este token es una cadena de caracteres única que contiene información sobre la identidad del usuario y los permisos asociados. Puede ser generado utilizando diferentes técnicas, como JWT (JSON Web Token) o tokens de sesión.

- **Inclusión en las solicitudes:** El cliente debe incluir este token en cada solicitud que haga al backend. Esto puede hacerse de varias maneras, como a través de encabezados HTTP (por ejemplo, el encabezado Authorization), cookies o incluso como parte de los parámetros de la URL.

- **Validación:** El backend recibe la solicitud y extrae el token de seguridad incluido. Luego, valida el token para asegurarse de que sea válido y no haya sido manipulado. Esto implica verificar la firma digital (en el caso de JWT), la validez del tiempo de vida del token y la autorización del usuario para acceder al recurso solicitado.

- **Autorización:** Una vez validado el token, el backend determina si el usuario tiene los permisos necesarios para acceder al recurso solicitado. Si el token es válido y el usuario está autorizado, se procesa la solicitud y se devuelve la respuesta correspondiente. De lo contrario, se devuelve un error de acceso no autorizado.

</br>

En resumen, los tokens de seguridad son una forma efectiva de proteger los recursos en un backend al autenticar y autorizar las solicitudes de los usuarios. Su uso es fundamental en el desarrollo de aplicaciones web y servicios API para garantizar la seguridad y la privacidad de los datos.
