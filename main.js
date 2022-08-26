let add = document.getElementById('addToDo');
let toDo = document.getElementById('toDoContainer');
let input = document.getElementById('inputField');

add.addEventListener('click', () => {

    let paragraph = document.createElement('h3')
    paragraph.classList.add('text-center')
    paragraph.innerText = input.value;

    let done = document.createElement('button')
    done.innerText = "Done";
    done.classList.add('btn', 'btn-success', 'float-right')

    let remove = document.createElement('button')
    remove.innerText = "Remove";
    remove.classList.add('btn', 'btn-danger')


    toDo.appendChild(paragraph);
    toDo.appendChild(done);
    toDo.appendChild(remove);
    input.value = "";
    done.addEventListener('click', () => {
        paragraph.style.textDecoration = "line-through";
    })

    remove.addEventListener('click', () => {
        toDo.removeChild(paragraph);
        toDo.removeChild(done);
        toDo.removeChild(remove);
    })

})