const express = require('express')
const app = express()
const port = 7077
var cors = require('cors')
// database connection settings
var mysqldb = require('mysql')

var connection = mysqldb.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3333,
    password: 'root',
    database: 'task_management'
})
connection.connect()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

//app.METHOD(PATH, HANDLER)
app.use(cors())
app.get('/', (req, res) => {
    console.log("Task Manager Called")
  res.send('Task Manager Information Application')
})

app.get('/tasklist/taskmanager/:cid',(req,res)=>{
     var selectSQL = 'select tid,tdescription,cid from task_list;'

     connection.query(selectSQL, function (err, rows, fields) {
        if (err) throw err

       console.log('Task Manager', rows.length)
         res.send(rows)
    })
  //connection.end()

})

app.post('/tasklist/newtask',(req,res)=>{
  var tid = req.body.tid
  var tdescription = req.body.tdescription
  var cid = req.body.cid
 
  var insertSQL = "insert into task_list(tid,tdescription,cid) values(?,?,?)"

  connection.query(insertSQL,[tid,tdescription,cid],
    function (err, rows, fields) {
      if (err) throw err

        console.log(tid+" Registered for "+tdescription)

        res.send({"Tid":tid,"Task Description":tdescription,"Cid":cid})
    })
})

app.listen(port, () => {
  console.log(`Task Manager started and listening at http://localhost:${port}`)
})
