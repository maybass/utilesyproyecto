app.get('/', (req, res) => {
	
	let usuarioLogin = true;
	if(usuarioLogin) {
		res.send('Entrada concedida')
	} else {
		res.status(401).send('Por favor se debe autenticar')
		
	}
	
	
	
	
})