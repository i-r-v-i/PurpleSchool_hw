import { ToDoList } from "../15-Task-object/index.js";

const newTask = {
 tasks:[],
 lastId: 0
}

newTask.addTask = function(title, priority, description='') {
    ToDoList.addTask.call(this, title, priority);
    console.log(this);
    const curTask =  this.tasks[this.tasks.length - 1];
    curTask.description = description;
    console.log(curTask);
}
// не пойму, почему в этой функции без return все ломается, а все функции ниже прекрасно без него работают
newTask.getTaskById = (id) => {
   return ToDoList.getTaskById.call(newTask, id);
}
newTask.removeTask = (id) => {
    ToDoList.removeTask.call(newTask, id);
}

newTask.updateTask = (data) => {
   ToDoList.updateTask.call(newTask, data);
}

newTask.sortTasksByPriority  = () => {
    ToDoList.sortTasksByPriority.call(newTask);
}

newTask.addTask('refbnm', 1, 'fgfghfghfgh');
newTask.addTask('Загрузить пмм', 2, 'налить ополаскиватель');
console.log(newTask);
console.log(newTask.getTaskById(2));
newTask.removeTask(2);
newTask.updateTask({id: 1, title: 'купить Алису', description: 'mini3'})
newTask.addTask('отнести вещи на авито', 6);
newTask.addTask('rrrrrrrrrrrnm', 3, 'fgfghfghfgh');
newTask.sortTasksByPriority();
console.log(newTask);