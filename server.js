/* Connect Dependecies and Libraries */
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

/* Declare Variables*/
const port = 8000;
const app = express();
const projectData = {};

/* General Configs */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('website'));

/* Start the server*/
app.listen(port, listening);
function listening() {
    console.log('The local server is running on http://localhost:' + port);
}

/* >>>>>>>>>>>>>>>> Execution part >>>>>>>>>>>>>>>> */

/* GET Request => Return the Journal Data/Records(projectData)*/
app.get('/getRecords', (req, res) => {
    res.send(projectData);
})


/* POST Request => Add/Register a Record to the Journal(projectData) */
app.post('/addRecord', (req, res) => {
    
    projectData.date = req.body.date;
    projectData.temp = req.body.temp;
    projectData.content = req.body.content;

    res.send(true);
});