const ToDoList = {
  tasks: [
    { title: "Помыть посуду", id: 1, priority: 1 },
  ],
  addTask: function (title='сделать...', priority=2) {
    const newId = this.tasks.length + 1;
    this.tasks.push({ title, id: newId, priority });
    return this.tasks;
  },
  removeTask: function (id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    return this.tasks;
  },
  updateTask: function ({title, id, priority}) {
    const curTask = this.tasks.find(task => task.id === id);
    if(curTask) {
      if(title) {
        curTask.title = title;
      }
      if(priority) {
        curTask.priority = priority;
      }
    } else {
      console.log("Задача с данным id не найдена");
    }
    return curTask;
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