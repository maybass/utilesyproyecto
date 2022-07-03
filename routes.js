const express = require('express')
const router = express.Router()




router.get('/' , (req,res) => {
	res.render('inicio' , {
		titulo : 'Inicio'
		
	})
	
})

router.get('/log-in', (req,res) => {
	res.render('log-in' , {
		
		titulo: 'Log in'
	})
	
})



router.get('/sobre-nosotros' , (req,res) => {
	res.render('sobre-nosotros' , {
		titulo : 'Sobre Nosotros'
		
	})
	
})

router.get('/contacto' , (req,res) => {
	res.render('contacto' , {
		titulo : 'Contacto'
		
	})
	
})

router.get('/como-comprar' , (req,res) => {
	res.render('como-comprar' , {
		titulo : 'Como Comprar'
		
	})
	
})

router.get('/terms' , (req,res) => {
	res.render('terms' , {
		titulo : 'Terminos y Condiciones'
		
	})
	
})

router.get((req,res) => {
	res.render('404' , {
		titulo: 'Not Found'
	})
	
})






module.exports = router 
