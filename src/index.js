document.addEventListener("DOMContentLoaded", () => {
  prevent();
});

function prevent(){
  let description = document.getElementById("create-task-form");
  description.addEventListener("submit", function(event){
    event.preventDefault();
  },false)
}
