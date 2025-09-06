// const  toDoarray = [];
const toDoarray = JSON.parse(localStorage.getItem('todolist'));
diplayToDoElements()

document.body.querySelector('.js-add-button').addEventListener('click',() => {
    addtoTodo();
})

function addtoTodo(){
    const inputValue = document.querySelector('.js-todo-input');
    const name = inputValue.value;
    const inputDateValue = document.querySelector('.js-todo-date-input');
    const dueDate = inputDateValue.value;
    toDoObject = {name, dueDate};
    toDoarray.push(toDoObject);
    localStorage.setItem('todolist',JSON.stringify(toDoarray));
    inputValue.value = '';
    diplayToDoElements()
}

function diplayToDoElements(){
    let htmlToDo = '';
    toDoarray.forEach(function(todoObject,index){
        const {name,dueDate} = todoObject;
        htmlToDo += `
        <div>${name}</div> 
        <div>${dueDate}</div>
        <button 
        class="delete-button js-delete-button">
        Delete</button>
        `
    })
    
    document.querySelector('.to-do-listing-container').innerHTML = htmlToDo;

    const delete_buttons = document.body.querySelectorAll('.js-delete-button');
    delete_buttons.forEach((deleteButtons,index) => {
        deleteButtons.addEventListener('click',() => {
            console.log(index);
            toDoarray.splice(index,1);
            localStorage.setItem('todolist', JSON.stringify(toDoarray));
            diplayToDoElements();
        })
    })
}