const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const fullList = document.querySelector('.list-task')

let myItemsList = []

function addNewTask() {
    myItemsList.push(input.value)

    input.value = ''
    
    showTask()
}

function showTask() {

    let newLi = ''

    myItemsList.forEach((task, index) => {
        newLi = newLi + `
        <li class="task">
        <img src="./img/checked.png" alt="check-na-tarefa">
        <p>${task}</p>
        <img src="./img/trash.png" alt="tarefa-exluída" onclick="deletItem(${index})">
        </li>       
      `
    })

    fullList.innerHTML = newLi
}

function deletItem(index) {
    console.log(index)
}

button.addEventListener('click', addNewTask)
