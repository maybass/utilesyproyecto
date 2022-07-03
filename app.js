const express = require('express')
const app = express()


//ESTE CODIGO PONERLO SIEMPRE EN FORMULARIOS
//middleware va ANTES DE LA SOLICITUD DE RESPUESTA PORQ TIENE Q PARSEARLO ANTES DE Q ENTRE
//INFO Q TOME DEL FORMULARIO LA PARSEE A JSON 
//EN LUGAR DE BODY PARSER, SINO NO TE LEE LS DATOS Q INGRESA EL USUARIO COMO JSON
//TIENE Q LEER LOS DTOS Q INGRESA EL USUARIO COMO UN JSON Y LO HACE ASI 
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));


let usuario = {
 nombre:'',
 apellido: ''
};
let respuesta = {
 error: false,
 codigo: 200,
 mensaje: ''
};
app.get('/', function(req, res) {
 respuesta = {
  error: true,
  codigo: 200,
  mensaje: 'Punto de inicio'
 };
 res.send(respuesta);
});


//metodo get

app.get('/usuario', function (req, res) {
 respuesta = {
  error: false,
  codigo: 200,
  mensaje: ''
 };
 if(usuario.nombre === '' || usuario.apellido === '') {
  respuesta = {
   error: true,
   codigo: 501,
   mensaje: 'El usuario no ha sido creado'
  };
 } else {
  respuesta = {
   error: false,
   codigo: 200,
   mensaje: 'respuesta del usuario',
   respuesta: usuario
  };
 }
 res.send(respuesta);
});

//metodo post ej si enviamos a traves de un formulario
app.post('/usuario', function (req, res) {
 if(!req.body.nombre || !req.body.apellido) {
  respuesta = {
   error: true,
   codigo: 502,
   mensaje: 'El campo nombre y apellido son requeridos'
  };
 } else {
  if(usuario.nombre !== '' || usuario.apellido !== '') {
   respuesta = {
    error: true,
    codigo: 503,
    mensaje: 'El usuario ya fue creado previamente'
   };
  } else {
   usuario = {
    nombre: req.body.nombre,
    apellido: req.body.apellido
   };
   respuesta = {
    error: false,
    codigo: 200,
    mensaje: 'Usuario creado',
    respuesta: usuario
   };
  }
 }
 
 res.send(respuesta);
});


//metodo de solicitud http put
app.put('/usuario', function (req, res) {
 if(!req.body.nombre || !req.body.apellido) {
  respuesta = {
   error: true,
   codigo: 502,
   mensaje: 'El campo nombre y apellido son requeridos'
  };
 } else {
  if(usuario.nombre === '' || usuario.apellido === '') {
   respuesta = {
    error: true,
    codigo: 501,
    mensaje: 'El usuario no ha sido creado'
   };
  } else {
   usuario = {
    nombre: req.body.nombre,
    apellido: req.body.apellido
   };
   respuesta = {
    error: false,
    codigo: 200,
    mensaje: 'Usuario actualizado',
    respuesta: usuario
   };
  }
 }
 
 res.send(respuesta);
});

//metodo delete
app.delete('/usuario', function (req, res) {
 if(usuario.nombre === '' || usuario.apellido === '') {
  respuesta = {
   error: true,
   codigo: 501,
   mensaje: 'El usuario no ha sido creado'
  };
 } else {
  respuesta = {
   error: false,
   codigo: 200,
   mensaje: 'Usuario eliminado'
  };
  usuario = { 
   nombre: '', 
   apellido: '' 
  };
 }
 res.send(respuesta);
});








//MIDDLEWARE DEL FINAL al final x si no hay ninguna d estas rutas, chequeando

app.use(function(req, res, next) {
 respuesta = {
  error: true, 
  codigo: 404, 
  mensaje: 'URL no encontrada'
 };
 res.status(404).send(respuesta);
});


//escucha server
app.listen(3000, () => {
	console.log('Servidor a la espera de conexiones en puerto 3000')
	
})


//Así es como manejamos, GET y POST. A su vez como mencioné previamente está PUT, este método es idéntico a POST y DELETE es idéntico a GET.

/*Entonces, entendiendo esto, podemos reutilizar la misma URL/ruta ('/hola )con distintos métodos, por ejemplo pensando que tenemos una libreta
 de direcciones podemos usar la URL /usuario para obtener un usuario en GET, POST para crearlo, PUT para actualizarlo y DELETE Para eliminarlo.*/