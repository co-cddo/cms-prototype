// Importing express module
const express = require('express');
const app = express();

// Getting Request
app.get('/', (req, res) => {

	// Sending the response
	res.send('Hello World!')
	
	// Ending the response
	res.end()
})

// Establishing the port
const PORT = process.env.PORT ||5000;

// Executing the server on given port number
app.listen(PORT, console.log(
`Server started on port ${PORT}`));

