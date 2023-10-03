// Importing express module
const express = require('express');
const app = express();



// Getting Request
app.get('/', (req, res) => {

	if(process.env.NODE_ENV=='production')
		res.send('2 You need to provide super secret password!')
	else
	// Sending the response
		res.send('2 Hello CDDO CMS prototype work!')
	// Ending the response
	res.end()
})

// Establishing the port
const PORT = process.env.PORT || 5000;

// Executing the server on given port number
app.listen(PORT, console.log(
`Server started on port ${PORT}`));

