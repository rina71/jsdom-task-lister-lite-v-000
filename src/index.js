document.addEventListener("DOMContentLoaded", () => {
  preventDefault();
});

function preventDefault(){
  let description = document.getElementById("new-task-description");
  description.addEventListener("click", function(event){
    event.preventDefault();
  },false)
}
