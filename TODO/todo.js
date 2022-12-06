let date = new Date();
let time = date.toLocaleTimeString();



document.querySelector('.push').onclick = function(){
  if(document.querySelector('.newtask input').value.length == 0){
      alert("Please Enter a Task")
  }

  else{
      document.querySelector('.tasks').innerHTML += `
          <div class="task">
              <span id="taskname">
              ${document.querySelector('.newtask input').value}
              </span>
              
              <button class="delete">
                  <i class="far fa-trash-alt"></i>
              </button>
              
              <p>  
              ${document.querySelector('p').innerHTML = time}
              </p>
              <button class="edit">Edit</button>
          </div>
      `;
// new Date()
      let current_tasks = document.querySelectorAll(".delete");
      for(var i=0; i<current_tasks.length; i++){
          current_tasks[i].onclick = function(){
              this.parentNode.remove();
          }
      }
  }
}

let modal = document.querySelector('.modal')
let modal_bg = document.querySelector('.modal_bg')
let cancel2 = modal.querySelector('.cancel')
let edit2 = modal.querySelector('.edit2')
let edit = modal.querySelector('.edit')

edit.onclick = () => {
  modal.style.display = "block"
  modal_bg.style.display = "block"
  reload(todos, container)
}

cancel2.onclick = () => {
  modal.style.display = "none"
  modal_bg.style.display = "none"
  reload(todos, container)
}
edit2.onclick = () => {
  modal.style.display = "none"
  modal_bg.style.display = "none"
  item.task = inp2.value
  h4.innerHTML = item.task
  reload(todos, container)
}


