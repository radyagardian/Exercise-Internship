

const addButton = document.getElementById('addtask');
const taskInput = document.getElementById('taskinput');
const taskList = document.getElementById('tasklist');

function addTask(){
    const task = taskInput.value.trim(); 
    // taskInput.value = input of user, trim: removes spaces (cannot make a task without letters)

    if (task) {  // if task is NOT empty
         createTask(task);
        taskInput.value = ''; //clears task input field after adding a task

    } else {
        alert('Please enter a task')
    }

}   

addButton.addEventListener('click', addTask) //On click, add a task

function createTask(task){

    const listitem = document.createElement('li'); // li = list item
    listitem.textContent = task;
    taskList.appendChild(listitem); //adds a value to a parent

    const deletebutton = document.createElement('button'); // Delete Button
    deletebutton.textContent = 'Delete';
    listitem.appendChild(deletebutton)

    deletebutton.addEventListener('click', function(){
        taskList.removeChild(listitem)
    });

}