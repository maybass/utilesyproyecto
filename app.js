const express = require('express')
const app = express()
const hbs = require('hbs')
const path = require('path')
const productos = require('./productos.json')

app.set('view engine', 'hbs')

/*app.get('/', (req,res) => {
	res.send('Hello world')
	
})*/

//app.use(express.static('public'))

app.use(express.static(path.join(__dirname, 'public')))





app.get('/productos' , (req,res) => {
	res.render('productos' , {
		titulo : 'Productos',
		productos : productos[0],
		productos2 : productos[1],
		productos3 : productos[2]
		
	})
	
})


//rutas
const routes = require('./src/routes')
app.use(routes)

/*app.get('/' , (req,res) => {
	res.render('inicio' , {
		titulo : 'Inicio'
		
	})
	
})

app.get('/sobre-nosotros' , (req,res) => {
	res.render('sobre-nosotros' , {
		titulo : 'Sobre Nosotros'
		
	})
	
})

app.get('/contacto' , (req,res) => {
	res.render('contacto' , {
		titulo : 'Contacto'
		
	})
	
})

app.get('/como-comprar' , (req,res) => {
	res.render('como-comprar' , {
		titulo : 'Como Comprar'
		
	})
	
})

app.get('/terms' , (req,res) => {
	res.render('terms' , {
		titulo : 'Terminos y Condiciones'
		
	})
	
})*/



app.listen(3000, ()=> {
	console.log('servidor a la espera de conexiones')
	
	
})