
let task = document.getElementById('task')
let add = document.querySelector('#add')
let liste = document.getElementById('liste')
let form = document.getElementById('form')


function getData() {
    let array = JSON.parse(localStorage.getItem('data')) || []

    return array
}


function addTask(e) {

    e.preventDefault()
    let array = getData()
    if (!array.find(el => el === task.value) && task.value !== ""){
        array.push(task.value)
        localStorage.setItem('data', JSON.stringify(array))
        task.value =""
        task.focus()
        displayTask()
    }
}

function displayTask() {

    liste.innerHTML = ""
    let array = getData()

    for (let task of array) {
        createElement(task)
    }
}

function createElement(tache) {
    let li = document.createElement('li')
    li.textContent = tache
    let btn = document.createElement('button')
    btn.textContent = 'Supprimer'
    li.appendChild(btn)
    btn.addEventListener('click',function(){
        deleteTask(tache)
    })
    
    liste.appendChild(li)
}

function deleteTask(task) {
    let array = getData()
    let index = array.indexOf(task)

    array.splice(index,1)

    localStorage.setItem('data', JSON.stringify(array))
    displayTask()
}

displayTask()

form.addEventListener('submit', addTask)
