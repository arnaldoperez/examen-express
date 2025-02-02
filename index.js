const {app} = require("./app.js");
const api = express()
app.use(express.json());
const tasks = [
    {
      id: 1,
      title: "Diseñar la interfaz de usuario",
      description: "Crear los mockups y el diseño visual de la aplicación",
      completed: false,
    },
    {
      id: 2,
      title: "Implementar la lógica de negocio",
      description: "Desarrollar las funciones principales de la aplicación",
      completed: true,
    },
  ];



api.get("/", (req,res) => {
  const output = {code:200,message:"la Api está funcionando"}
  return res.send(output).status(200)
})

app.get("/tasks", (req, res)=> {
  return res.send(tasks).status(200)
})

app.get("/tasks/:id", (req, res)=> {
  const taskId = parseInt(req.params.id)
  const singleTask = tasks.find(task=>task.id==taskId)
  return res.send(singleTask).status(200)
 
})

app.post("/tasks/:id", (req, res)=> {
  let body=req.body
  console.log(body)
  return res.send({msg:"ok"}).status(200)
})


app.listen(3000,()=>console.log("Listening on port 3000"))