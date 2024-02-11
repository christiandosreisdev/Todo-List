const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const fullList = document.querySelector('.list-task')

let myItemsList = []

function addNewTask() {
    myItemsList.push({
        task: input.value,
        complete: false
    })

    input.value = ''
    
    showTask()
}

function showTask() {

    let newLi = ''

    myItemsList.forEach((item, index) => {
        newLi = newLi + `
        <li class="task ${item.complete && 'done'}">
        <img src="./img/checked.png" alt="check-na-tarefa" onclick="completeTask(${index})">
        <p class="text">${item.task}</p>
        <img src="./img/trash.png" alt="tarefa-exluída" onclick="deletItem(${index})">
        </li>       
      `
    })

    fullList.innerHTML = newLi

    localStorage.setItem('task', JSON.stringify(myItemsList))
}

function completeTask (index) {
   myItemsList[index].complete = !myItemsList[index].complete

   showTask()
}

function deletItem(index) {
    myItemsList.splice(index, 1)
    console.log(index)

    showTask()
}

function reloadTask() {
    const localStorageTasks = localStorage.getItem('list')
    if(localStorageTasks){
        myItemsList = JSON.parse(localStorageTasks)
    }

    showTask()
}

reloadTask()
button.addEventListener('click', addNewTask)
