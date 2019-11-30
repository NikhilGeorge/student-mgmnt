var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send(JSON.stringify({"status": 200, "error": null, "response": "This is the default login for Studnet"}));
});

router.get('/viewTeacher', function(req, res, next) {
	res.send(JSON.stringify({"status": 200, "error": null, "response": "This is view Teacher, provide an id"}));
});

router.get('/viewTeacher/**', (req, res) => {
	const teacherId = parseInt(req.params[0]);

	connection.query(`SELECT * from teacher where teacherid = ${teacherId}`, function (error, results, fields) {
		if(error){
			res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
			//If there is error, we send the error in the error section with 500 status
		} else {
			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
			//If there is no error, all is good and response is 200OK.
		}
	});
	
	//Lookup info in DB

});


router.post("/addTeacher", (req, res, next) => {
 
	//read product information from request
	console.log(req.body)
	
	connection.query(`INSERT INTO teacher (username, firstname, lastname, email, password, phone, attendence) VALUES ('${req.body.username}',' ${req.body.firstname}','${req.body.lastname}',' ${req.body.email}','${req.body.password}', ${req.body.phone},${req.body.attendence})`, function (error, results, fields) {
		if(error){
			res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
			//If there is error, we send the error in the error section with 500 status
		} else {
			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
			//If there is no error, all is good and response is 200OK.
		}
	});
 
});

router.put("/updateTeacher", (req, res, next) => {
 
	//read product information from request
	console.log(req.body)
	
	connection.query(`UPDATE teacher set password ='${req.body.password}' where teacherid = ${req.body.teacherid}`, function (error, results, fields) {
		if(error){
			res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
			//If there is error, we send the error in the error section with 500 status
		} else {
			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
			//If there is no error, all is good and response is 200OK.
		}
	});
 
});


module.exports = router;
