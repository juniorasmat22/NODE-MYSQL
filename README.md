# NODE-MYSQL
1 paso: inicalizar proyectos de node
npm init
2 paso : instalar dependencias:
*express: framework mas popular de node js para la creación de aplicaciones backend
*express-handlebars: complemento de express, para la integración del motor plantillas handlebars en express hay otras como ejs
*express-session: administra sesiónes dentro de nuestra aplicación, necesario para autenticar usuarios
*mysql: modula para conectarnos a la bd **ojo** solo es para conectarnos y hacer consultas a la bd.  
*express-mysql-session: almacenará las sesiones en la bd en lugar del servidor
*morgan: mostrar las peticiones que van llegando al servidor
*bcryptjs: cifrar las contraseñas antes de guardalas en la bd
*passport: modulo para la autenticación 
*passpot-local: autenticación local
*timeago: muestra el tiempo y los timestamp en formato hace 2 minutos, hace un momento
*connect-flash: mostrar mensajes de error y exito cuando realize una operación
*express-validator: validar los datos que el usuarios nos envía desde la app cliente
codigo:
npm i express express-handlebars express-session mysql express-mysql-session morgan bcryptjs passport passpot-local timeago connect-flash express-validator
