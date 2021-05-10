const express = require('express')
var cors = require('cors')
const empapp = express()
const port = 7077

// body parser config
// var bodyparser = require('body-parser')
empapp.use(express.urlencoded({extended:false}))
empapp.use(express.json())



// database connection settings
var mysqldb = require('mysql')
            


var connection = mysqldb.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3333',
    password: 'root',
    database:'training21'
}
)


connection.connect()

// enable cors for all the requests
empapp.use(cors())


//app.METHOD(PATH, HANDLER)

empapp.get('/', (req, res) => {
    // console.log('Employee app started and listening at http://localhost:${port}')
  res.send('Employee Information application')
})

empapp.get('/emp/list/:empno',(req,res)=>
{

    var empno = req.params.empno
 var selectSQL = 'select empno, projectid, name, location from employee_projects where empno=?'
    
    connection.query(selectSQL,[empno], function (err, rows, fields) {
        if (err) throw err
        console.log('Employees Fetched ', rows.length)
        res.send(rows)
        // console.log('The solution is: ', rows[0].solution)
       // res.send(rows)
    
})
// connection.end()
})

empapp.post('/emp/register',(req,res)=>{
var empno = req.body.empno
var name = req.body.name
var projectid = req.body.projectid
var location = req.body.location

var insertSQL = "insert into employee_projects (empno,projectid, name, location)values(? , ? , ? , ?)"

connection.query(insertSQL,[empno,projectid,name,location] ,
    function(err,rows, fields) {
        if (err) throw err
        console.log(projectid+" Registered for "+empno)
        res.send({"empno":empno, "name": name,"projectid":projectid,"location":location})
    })


})

empapp.get("/emp/:empno/project/delete/:projectid",(req,res)=>{
    var empno = req.params.empno    
    var projectid = req.params.projectid

    var deleteSQL = "delete from employee_projects where empno=? and projectid=?"
    
    connection.query(deleteSQL, [empno,projectid], 
        function (err , rows, fields) {
            if (err) throw err

            var message =projectid+" Deleted for Employee "+empno
            console.log(message)
      res.send({"message":message})
        })
})


empapp.listen(port, () => {
    console.log(`Employee app started and lisyening at http://localhost:${port}`);
});
