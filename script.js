let form = document.forms.todo
let container = document.querySelector('.container')
let todos = [{
    id: 1,
    isDone: false,
    task: "Hello",
    time: new Date().getHours() + ":" + new Date().getMinutes(),
}
    ,
{
    id: 2,
    isDone: false,
    task: "Hello 2",
    time: "11:05"
}

    ,
{
    id: 3,
    isDone: false,
    task: "Hello 3",
    time: "11:05"
},
]

form.onsubmit = (e) => {
    e.preventDefault()
    let todo = {
        id: Math.random(),
        isDone: false,
        time: new Date().getHours() + ':' + new Date().getMinutes()
    }

    let fm = new FormData(form)
    fm.forEach((value, key) => {
        todo[key] = value
    });

    if (todo.task.length > 0) {
        todos.push(todo);
        reload(todos, container)
    }

    else {
        alert('Please enter task')
    }

}

let modal = document.querySelector('.modal')
let modal_bg = document.querySelector('.modal_bg')
let input = modal.querySelector('input')
let cancel2 = modal.querySelector('.cancel')
let changeBtn = modal.querySelector('.edit')


const reload = (arr, place) => {
    place.innerHTML = ""

    for (let item of arr) {
        let mainDiv = document.createElement('div')
        let topSide = document.createElement('div')
        let h4 = document.createElement('h4')
        let del = document.createElement('button')
        let edit = document.createElement('button')
        let time = document.createElement('time')

        mainDiv.classList.add('item')
        topSide.classList.add('top-side')
        h4.innerHTML = item.task
        del.innerHTML = "x"
        time.innerHTML = item.time
        edit.innerHTML = "edit"



        topSide.append(h4, del, edit)
        mainDiv.append(topSide, time)
        place.append(mainDiv) // functions


        h4.onclick = () => {
           h4.classList.add("active")
           item.isDone = true
           item.time = new Date().getHours() + ':' + new Date().getMinutes()
    }
             
        del.onclick = () => {
            todos = todos.filter(el => el.id !== item.id)
            reload(todos, container)
        }
        edit.onclick = () => {
          setTimeout(() => {
            modal.style.display = "block"
            modal_bg.style.display = "block"
          },500);
          
            reload(todos, container)
        }

        cancel2.onclick = () => {
          setTimeout(() => {
            modal.style.display = "none"
            modal_bg.style.display = "none"
          },300);
            reload(todos, container)
        }
        changeBtn.onclick = () => {
          setTimeout(() => {
            modal.style.display = "none"
            modal_bg.style.display = "none"
          },300);
            h4.innerHTML = item.task
            item.task = input.value
            item.isDone = true
            item.time = new Date().getHours() + ':' + new Date().getMinutes()
            reload(todos, container)
        }
    }
}





    reload(todos, container)
    console.log(todos);
