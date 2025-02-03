const Express=require("express")
const Cors=require("cors")

const app=Express()
app.use(Cors())
app.use(Express.json())

// Tu código va desde aquí ⬇️
const Estudiantes = [
    {
      id: 22,
      title: "Joelby Salcedo",
      description: "Alto y muy delgado",
      completed: false,
    },
    {
      id: 20,
      title: "Anny Perez",
      description: "Una bajita morena",
      completed: true,
    },
    app.get("/",(req,res)=>{
        const output = {
            code:200,
            message: "Api en funcionamiento"
        }
        return res.send(output).status (200)
    })
    app.get("/Estudiantes",(req,res)=>{
        return res.send(Estudiantes).status(200)
    })
    
  ];


// Hasta aquí ⬇⬆️

module.exports={app}
