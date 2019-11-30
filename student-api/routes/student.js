var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send(JSON.stringify({"status": 200, "error": null, "response": "This is the default login for Studnet"}));
});

router.get('/viewStudent', function(req, res, next) {
	res.send(JSON.stringify({"status": 200, "error": null, "response": "This is view Student, provide an id"}));
});

router.get('/viewStudent/**', (req, res) => {
	const studentId = parseInt(req.params[0]);

	connection.query(`SELECT * from student where studentid = ${studentId}`, function (error, results, fields) {
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


router.post("/addStudent", (req, res, next) => {
 
	//read product information from request
	console.log(req.body)
	
	connection.query(`INSERT INTO student (username, firstname, lastname, email, password, phone, attendence) VALUES ('${req.body.username}',' ${req.body.firstname}','${req.body.lastname}',' ${req.body.email}','${req.body.password}', ${req.body.phone},${req.body.attendence})`, function (error, results, fields) {
		if(error){
			res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
			//If there is error, we send the error in the error section with 500 status
		} else {
			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
			//If there is no error, all is good and response is 200OK.
		}
	});
 
});

router.put("/updateStudent", (req, res, next) => {
 
	//read product information from request
	console.log(req.body)
	
	connection.query(`UPDATE student set password ='${req.body.password}' where studentid = ${req.body.studentid}`, function (error, results, fields) {
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
