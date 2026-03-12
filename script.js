const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', function(){
  const taskText = taskInput.value;

  if (taskText==="") return;

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', function(){
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value="";
});
