const ToDoList = {
  tasks: [
    { title: "Помыть посуду", id: 1, priority: 1 },
  ],
  getTaskById () {
    const task = this.tasks.find((task) => task.id === id);
    if(!task) {
        console.log(`задача с id = ${id} не найдена`);
        return;
    }
    return task;
  },
  addTask: function (title='сделать...', priority=2) {
    const newId = this.tasks.length + 1;
    this.tasks.push({ title, id: newId, priority });
    return this.tasks;
  },
  removeTask () {
    const task = this.getTaskById(id);
    if(task){
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
    return this.tasks;
  }, 
  updateTask (data) {
    const { id, ...otherData} = data
    const task = this.getTaskById(id);
    if(Object.keys(otherData).length === 0){
        return task;
    }
    Object.assign(task, otherData);
    console.log(`задача с id = ${ id } - успешно обновлена`);
    return task;
},

  sortTasksByPriority: function () {
    return this.tasks.sort((a, b) => a.priority - b.priority)
  },
};

ToDoList.addTask("снять деньги", 6);
ToDoList.addTask("отвести детей в сад", 1);
ToDoList.removeTask(7);
ToDoList.updateTask({title: "Выпить кофе", id: 1});
ToDoList.updateTask({ id: 3})
ToDoList.sortTasksByPriority();