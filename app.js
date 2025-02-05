const Express = require("express")
const Cors = require("cors")

const app = Express()
app.use(Cors())
app.use(Express.json())

// Tu código va desde aquí ⬇️
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
let currentld = tasks.length + 1;

//Crear una nueva tarea con (POST/tasks)
app.post("/tasks", (req, res) => {
  const newTask = {
    id: currentld++,
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed
  };
  tasks.push(newTask);
  res.status(201).json(newTasks);
});

//Aqui obtenemos la lista de todoas las tareas a realizar con (GET/tasks)
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

//Vamos a obtener una tarea especifica por su ID con (GET/tasks/:id)
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (task) {
    res.json(task);
  }
  else {
    res.status(404).send("Tarea no encontrada");
  }
});

// Actualicemos una tarea ya existente con (PUT/tasks/:id)
app.put("/tasks/id:", (req, res) => {
  const task = tasks.find(t => t.id == req, params.id);
  if (task) {
    task.title = req.body.title;
    task.description = req.body.description;
    task.completed = req.body.completed;
    res.json(task);
  }
  else {
    res.status(404).send("Tarea no encontrada");
  }
});

//Eliminamos una tarea existente con (DELETE/tasks/:id)
app.delete("/tasks/:id", (req, res) => {
  const task = tasks.findIndex(t => req.params.id);
  if (index > -1) {
    const deletedTask = tasks.splice(index, 1);
    res.json(deletedTask);
  }
  else {
    res.status(404).send("Tarea no encontrada");
  }
});

//Iniciar el servidor por medio del PORT 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Servidor escuchando en puerto $ 3000');

});

// Hasta aquí ⬇⬆️

module.exports = { app }