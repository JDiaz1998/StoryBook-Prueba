Primero descargar el repositorio.
    - De manera local, ingresar en la terminal del proyecto y ingresar el siguiente comando.
        - npm install o npm i (Para instalar las dependencias de Node).
    - Luego de que se instalen las dependencias, ya esta operativo de manera local.

Segundo visualizar el proyecto
    - Ingrese a la terminal y coloque el siguiente comando.
        - npm run start o npm start (Para iniciar el proyecto de manera local, ocupando el http://localhost:3000).

Tercero ingreso obligatorio
    - El proyecto tiene rutas restringidas, es por esto que se creo un usuario de prueba para que pueda ingresar, de igual forma se puede crear un usuario en la ventana de registro. Los datos de usuarios de prueba son los siguientes:
        - email: main@gmail.com ; password: 123456
    - Se que no era necesario pero hice la conexion con una base de datos en Firebase.
    - Metodos para ingresar a la pagina: Login con Email y Password o Cuenta de Google.

Cuarto Agregar tareas
    - En el costado inferior derecho hay un botón flotante que al presionarlo abre la ventana para generar una nueva tarea.
    - Una vez ingresada la tarea se visualizará en el costado izquierdo (Sidebar).
    - Si desea eliminar o editar la tarea ingresada, debe hacerle click a la tarea en cuestion, ubicada en el costado izquierdo (Sidebar).

Quinto Pruebas unitarias
    - Para realizar las pruebas debe ir nuevamente al visual studio code y en la consola ingresar el siguiente comando: 
        - npm run test:watch (Tiene la funcion del jest --watchAll).